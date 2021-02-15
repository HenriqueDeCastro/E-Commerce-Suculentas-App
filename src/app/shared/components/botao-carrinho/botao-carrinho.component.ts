import { Component, Input, OnInit } from '@angular/core';
import { IProdutoCarrinho } from '../../models/IProdutoCarrinho';
import { IProduto } from '../../models/IProduto';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';
import { SnackbarService } from 'src/app/core/services/shared/Snackbar/Snackbar.service';
import { MensagensService } from 'src/app/core/services/shared/Mensagens/Mensagens.service';
import { CryptService } from 'src/app/core/services/shared/Crypt/Crypt.service';

@Component({
  selector: 'app-botao-carrinho',
  templateUrl: './botao-carrinho.component.html',
  styleUrls: ['./botao-carrinho.component.scss']
})
export class BotaoCarrinhoComponent implements OnInit {

  @Input() TipoBotao: string;
  @Input() Quantidade: number;
  @Input() Voltar = false;
  @Input() Produto: IProduto;
  public Desabilitar: boolean;
  private TipoEncomenda: number;
  private TipoEstoque: number;
  private Produtos: IProdutoCarrinho[];
  private QuantidadeCarrinho: number;

  constructor(private snackbar: SnackbarService,
              private location: Location,
              private cryptService: CryptService,
              private mensagemSnackbar: MensagensService) { }

  ngOnInit(): void {
    this.TipoEncomenda = environment.TipoProdutoEncomenda;
    this.TipoEstoque = environment.TipoProdutoEstoque;
    this.VerificaTotalProduto();
  }

  VerificaTotalProduto() {
    this.RecuperarProdutosStorage();

    if (this.Produtos) {
      let Pr: IProdutoCarrinho[] = this.FiltraProduto();
      const produto = Pr[0];

      if(produto)
        this.Desabilitar = this.ValidaQuantidadeDisponivel(produto);
    }
  }

  RecuperarProdutosStorage() {
    const produtos = localStorage.getItem(environment.VariavelProduto);

    if(produtos)
    this.Produtos = this.cryptService.descryptObject(produtos);
  }

  FiltraProduto(): IProdutoCarrinho[] {
    return this.Produtos.filter(p => p.id == this.Produto.id);
  }

  ValidaQuantidadeDisponivel(produto: IProdutoCarrinho): boolean {
    const ValorMaximo = this.Produto.tipoProdutoId == environment.TipoProdutoEncomenda? this.Produto.quantidadeMaxima : this.Produto.estoque;
    return ValorMaximo < (produto.quantidadePedido + this.Quantidade)? true : false
  }

  ValidaProdutoDisponivel(produto: IProduto): boolean {
    const ValorMaximo = this.Produto.tipoProdutoId == environment.TipoProdutoEncomenda? this.Produto.quantidadeMaxima : this.Produto.estoque;
    return ValorMaximo > 0? true : false
  }

  ColocarCarrinho(): void {
    if (this.ValidaProdutoDisponivel(this.Produto))
    {
      this.RecuperarProdutosStorage();

      const quantidade = localStorage.getItem(environment.VariavelQuantidade);

      if(quantidade)
      this.QuantidadeCarrinho = Number(this.cryptService.descryptText(quantidade));

      if (this.Produtos == null)
      {
        this.InserirStoragePrimeiraVez();
      }
      else
      {
        this.InserirStorage();
      }
    }
  }

  InserirStoragePrimeiraVez() {
    localStorage.setItem(environment.VariavelProduto, this.cryptService.cryptObject([this.ConvertProdutoinCarrinho(this.Produto)]));
    localStorage.setItem(environment.VariavelQuantidade, this.cryptService.cryptText(String(this.Quantidade)));
    this.snackbar.OpenSnackBarSuccess(this.mensagemSnackbar.ProdutoAdicionadoCarrinho);
    this.VerificaTotalProduto();
    this.VoltarPagina();
  }

  InserirStorage() {
    let Pr: IProdutoCarrinho[] = this.FiltraProduto();
    const produto = Pr[0];

    if (produto) {
      if (!this.ValidaQuantidadeDisponivel(produto))
      {
        this.Produtos.forEach((produto, index) => {
          if (produto.id === this.Produto.id) {
            this.Produtos.splice(index, 1);
          }
        });

        this.QuantidadeCarrinho = this.QuantidadeCarrinho + this.Quantidade;

        localStorage.setItem(environment.VariavelQuantidade, this.cryptService.cryptText(String(this.QuantidadeCarrinho)));

        produto.quantidadePedido = produto.quantidadePedido + this.Quantidade;
        this.Produtos.push(produto);
        localStorage.setItem(environment.VariavelProduto, this.cryptService.cryptObject(this.Produtos));

        this.snackbar.OpenSnackBarSuccess(this.mensagemSnackbar.ProdutoAdicionadoCarrinho);

        this.VerificaTotalProduto();
        this.VoltarPagina();
      }
      else
      {
        this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroEstoqueMaximo);
      }
    }
    else {
      this.Produtos.push(this.ConvertProdutoinCarrinho(this.Produto));
      localStorage.setItem(environment.VariavelProduto, this.cryptService.cryptObject(this.Produtos));
      this.QuantidadeCarrinho = this.QuantidadeCarrinho + this.Quantidade;
      localStorage.setItem(environment.VariavelQuantidade, this.cryptService.cryptText(String(this.QuantidadeCarrinho)));

      this.snackbar.OpenSnackBarSuccess(this.mensagemSnackbar.ProdutoAdicionadoCarrinho);

      this.VerificaTotalProduto();
      this.VoltarPagina();
    }
  }

  ConvertProdutoinCarrinho(produto: IProduto): IProdutoCarrinho {
    let produtoCarrinho: IProdutoCarrinho;

    return produtoCarrinho = {
      id: produto.id,
      nome: produto.nome,
      descricao: produto.descricao,
      preco: produto.preco,
      imagem: produto.imagem,
      estoque: produto.estoque,
      ativo: produto.ativo,
      tipoProdutoId: produto.tipoProdutoId,
      categoriaId: produto.categoriaId,
      quantidadeMaxima: produto.quantidadeMaxima,
      quantidadePedido: this.Quantidade
    };
  }

  VoltarPagina(): void {
    if (this.Voltar)
      this.location.back();
  }
}
