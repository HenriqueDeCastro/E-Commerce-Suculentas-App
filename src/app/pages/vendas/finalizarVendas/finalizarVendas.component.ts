import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/server/Auth/Auth.service';
import { EnderecoService } from 'src/app/core/services/server/Endereco/Endereco.service';
import { MelhorEnvioService } from 'src/app/core/services/server/MelhorEnvio/MelhorEnvio.service';
import { CryptService } from 'src/app/core/services/shared/Crypt/Crypt.service';
import { MensagensService } from 'src/app/core/services/shared/Mensagens/Mensagens.service';
import { SnackbarService } from 'src/app/core/services/shared/Snackbar/Snackbar.service';
import { ICalculoFrete } from 'src/app/shared/models/ICalculoFrete';
import { IEndereco } from 'src/app/shared/models/IEndereco';
import { IProdutoCarrinho } from 'src/app/shared/models/IProdutoCarrinho';
import { IUser } from 'src/app/shared/models/IUser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-finalizarVendas',
  templateUrl: './finalizarVendas.component.html',
  styleUrls: ['./finalizarVendas.component.scss']
})
export class FinalizarVendasComponent implements OnInit {

  public IdEstoque: number;
  public IdEncomenda: number;
  public TipoId: number;
  public Produtos: IProdutoCarrinho[] = [];
  public User: IUser;
  public Enderecos: IEndereco[];
  public EnderecoSelecionado: IEndereco;
  public ValorFrete: ICalculoFrete;

  constructor(private activetedRoute: ActivatedRoute,
              private snackbar: SnackbarService,
              private melhorEnvioService: MelhorEnvioService,
              private enderecoService: EnderecoService,
              private cryptService: CryptService,
              private router: Router,
              private authService: AuthService,
              private mensagemSnackbar: MensagensService) { }

  ngOnInit() {
    this.IdEncomenda = environment.TipoProdutoEncomenda;
    this.IdEstoque = environment.TipoProdutoEstoque;
    this.ReceberValorRota();
    this.ReceberProdutoCarrinho();
    this.ReceberUserLogado();
    this.ReceberEnderecoUser();
  }

  ReceberValorRota(): void {
    this.TipoId = this.activetedRoute.snapshot.params.idTipoProduto;

    if(this.TipoId != this.IdEncomenda && this.TipoId != this.IdEstoque) {
      this.router.navigate(['/carrinho']);
    }
  }

  ReceberProdutoCarrinho(): void {
    const produtosCrypt = localStorage.getItem(environment.VariavelProduto);
    if(produtosCrypt) {
      let Produtos: IProdutoCarrinho[] = this.cryptService.descryptObject(produtosCrypt);
      this.SepararTiposProdutos(Produtos);
    } else {
      this.router.navigate(['/produtos']);
    }
  }


  SepararTiposProdutos(Produtos: IProdutoCarrinho[]) {
    this.Produtos = Produtos.filter(p => p.tipoProdutoId == this.TipoId);
    if(this.Produtos.length <= 0) {
      this.router.navigate(['/produtos']);
    }
  }

  ReceberUserLogado(): void{
    this.User = this.authService.GetUserToken();
  }

  ReceberEnderecoUser() {
    this.enderecoService.GetByUserId(this.User.id).subscribe((enderecos: IEndereco[]) => {
      this.Enderecos = enderecos;
    },
    erro => {
      console.log(erro);
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidor);
    });
  }

  SelecionaEndereco(endereco: IEndereco) {
    this.ValorFrete = null;
    this.EnderecoSelecionado = endereco;
    this.CalcularFrete();
  }

  CalcularFrete() {
    if (this.EnderecoSelecionado) {
      this.melhorEnvioService.CalcularFretePacote(this.EnderecoSelecionado.cep).subscribe((result: ICalculoFrete) => {
        this.ValorFrete = result;
      },
      (erro) => {
        console.log(erro);
        this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroServidorMelhorEnvio);
      });
    } else {
      this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroCampoCEPPreenchido);
    }
  }
}
