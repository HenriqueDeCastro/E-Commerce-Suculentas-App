import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/server/Auth/Auth.service';
import { HorarioService } from 'src/app/core/services/shared/Horario/Horario.service';
import { VendaService } from 'src/app/core/services/server/Venda/Venda.service';
import { IEndereco } from 'src/app/shared/models/IEndereco';
import { IPedido } from 'src/app/shared/models/IPedido';
import { IProdutoCarrinho } from 'src/app/shared/models/IProdutoCarrinho';
import { IUser } from 'src/app/shared/models/IUser';
import { IVenda } from 'src/app/shared/models/IVenda';
import { SnackbarService } from 'src/app/core/services/shared/Snackbar/Snackbar.service';
import { MensagensService } from 'src/app/core/services/shared/Mensagens/Mensagens.service';
import { IProduto } from 'src/app/shared/models/IProduto';
import { CryptService } from 'src/app/core/services/shared/Crypt/Crypt.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-botao-venda',
  templateUrl: './botao-venda.component.html',
  styleUrls: ['./botao-venda.component.scss']
})
export class BotaoVendaComponent implements OnInit {

  private Venda: IVenda;
  private Pedidos: IPedido[] = [];
  public Registrando: boolean = false;
  public TextoBotao = 'Pagar';
  public IdEstoque: number;
  public IdEncomenda: number;
  public TipoId: number;
  @Input() ValorTotal: number;
  @Input() ValorFrete: number;
  @Input() Produtos: IProdutoCarrinho[];
  @Input() Endereco: IEndereco;

  constructor(private horarioService: HorarioService,
              private vendaService: VendaService,
              private snackbar: SnackbarService,
              private mensagemSnackbar: MensagensService,
              private cryptService: CryptService,
              private router: Router,
              private activetedRoute: ActivatedRoute,
              private authService: AuthService) { }

  ngOnInit() {
    this.TipoId = this.activetedRoute.snapshot.params.idTipoProduto;
    this.IdEncomenda = environment.TipoProdutoEncomenda;
    this.IdEstoque = environment.TipoProdutoEstoque;
  }

  Pagar() {
    const user: IUser = this.authService.GetUserToken();
    this.Registrando = true;
    this.TextoBotao = 'Registrando pedidos';
    this.Pedidos = [];

    this.Produtos.forEach((produto: IProdutoCarrinho) => {
      const pedido: IPedido = {
        quantidade: produto.quantidadePedido,
        produtoId: produto.id,
        preco: produto.preco
      }
      this.Pedidos.push(pedido);
    });

    this.Venda = {
      dataVenda: this.horarioService.RetornaDataHoraAtual(),
      valor: this.ValorTotal,
      frete: this.ValorFrete? true : false,
      valorFrete: this.ValorFrete? this.ValorFrete: null,
      userId: user.id,
      endereco: `R. ${this.Endereco.rua}, ${this.Endereco.numero} - ${this.Endereco.bairro}, ${this.Endereco.cidade} - ${this.Endereco.estado}, ${this.Endereco.cep}`,
      pedidos: this.Pedidos
    }

    this.vendaService.Post(this.Venda).subscribe((venda: IVenda) => {

      this.RetiraProdutos();

      this.TextoBotao = 'Redirecionando...';

      window.location.href = environment.UrlPagSegurosCheckout + venda.codigoTransacao;

      this.router.navigate(['/vendas/concluida/' + venda.id]);
      this.snackbar.OpenSnackBarSuccess(this.mensagemSnackbar.VendaComSucesso);
    },
    erro => {
      console.error(erro);

      switch (erro.status) {
        case 404: {
          const produto: IProduto[] = erro.error;
          this.FlegarProdutoIndisponivel(produto);
          this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ProdutoIndisponivelNoServidor);
          this.router.navigate(['/carrinho']);
          break;
        }
        case 503: {
          this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroPagSeguro);
          this.router.navigate(['/carrinho']);
          break;
        }
        default: {
          this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
          break;
        }
      }

      this.Registrando = false;
      this.TextoBotao = 'Pagar';
    });
  }

  FlegarProdutoIndisponivel(produtosIndisponiveis: IProduto[]) {
    let produtos: IProdutoCarrinho[] = this.ReceberProdutoCarrinho();
    produtos.forEach((produto: IProdutoCarrinho) => {
      produtosIndisponiveis.forEach((produtoIndisponivel: IProduto) => {
        if(produto.id == produtoIndisponivel.id) {
          produto.indisponivel = true;
          return;
        }
      });
    });

    localStorage.setItem(environment.VariavelProduto, this.cryptService.cryptObject(produtos));
  }

  ReceberProdutoCarrinho(): IProdutoCarrinho[] {
    const produtosCrypt = localStorage.getItem(environment.VariavelProduto);
    return this.cryptService.descryptObject(produtosCrypt);
  }

  RetiraProdutos() {
    const ProdutosCrypt = localStorage.getItem(environment.VariavelProduto);

    if(ProdutosCrypt) {
      let Produtos: IProdutoCarrinho[] = this.cryptService.descryptObject(ProdutosCrypt);
      let ProdutosQueContinuam: IProdutoCarrinho[];
      let QuantidadeQueContinua: number = 0;

      localStorage.removeItem(environment.VariavelProduto);
      localStorage.removeItem(environment.VariavelQuantidade);

      if(this.TipoId == this.IdEncomenda)
      {
        ProdutosQueContinuam = Produtos.filter(p => p.tipoProdutoId == this.IdEstoque);
      }
      else
      {
        ProdutosQueContinuam = Produtos.filter(p => p.tipoProdutoId == this.IdEncomenda);
      }

      ProdutosQueContinuam.forEach((produto: IProdutoCarrinho) => {
        QuantidadeQueContinua += produto.quantidadePedido;
      })

      if(ProdutosQueContinuam && QuantidadeQueContinua) {
        localStorage.setItem(environment.VariavelProduto, this.cryptService.cryptObject(ProdutosQueContinuam));
        localStorage.setItem(environment.VariavelQuantidade, this.cryptService.cryptText(String(QuantidadeQueContinua)));
      }
    }
  }
}
