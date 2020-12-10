import { Component, Input, OnInit } from '@angular/core';
import { IProdutoCarrinho } from '../../models/IProdutoCarrinho';
import { IProduto } from '../../models/IProduto';
import { Location } from '@angular/common';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { environment } from 'src/environments/environment';
import { MensagemSnackbarComponent } from '../mensagem-snackbar/mensagem-snackbar.component';

@Component({
  selector: 'app-botao-carrinho',
  templateUrl: './botao-carrinho.component.html',
  styleUrls: ['./botao-carrinho.component.scss']
})
export class BotaoCarrinhoComponent implements OnInit {

  @Input() TipoBotao: string;
  @Input() Quantidade: number;
  @Input() Desabilitar: boolean;
  @Input() Voltar = false;
  @Input() Produto: IProduto;
  private Produtos: IProdutoCarrinho[];
  private QuantidadeCarrinho: number;

  constructor(private snackbar: SnackbarComponent,
              private location: Location,
              private mensagemSnackbar: MensagemSnackbarComponent) { }

  ngOnInit(): void {}

  ColocarCarrinho(): void {
    if (this.Produto.estoque > 0) {
      this.Produtos = JSON.parse(localStorage.getItem(environment.VariavelProduto));
      this.QuantidadeCarrinho = JSON.parse(localStorage.getItem(environment.VariavelQuantidade));

      if (this.Produtos == null)
      {
        localStorage.setItem(environment.VariavelProduto, JSON.stringify([this.ConvertProdutoinCarrinho(this.Produto)]));
        localStorage.setItem(environment.VariavelQuantidade, String(this.Quantidade));
        this.snackbar.OpenSnackBarSuccess(this.mensagemSnackbar.ProdutoAdicionadoCarrinho);
        if (this.Voltar)
        {
          this.VoltarPagina();
        }
      }
      else
      {
        if (this.InserirCarrinho())
        {
          this.snackbar.OpenSnackBarSuccess(this.mensagemSnackbar.ProdutoAdicionadoCarrinho);
          if (this.Voltar)
          {
            this.VoltarPagina();
          }
        }
        else
        {
          this.snackbar.OpenSnackBarError(this.mensagemSnackbar.ErroEstoqueMaximo);
        }
      }
    }
  }

  InserirCarrinho(): boolean {
    const produtosCarrinho = [];
    let produtoExistente = false;
    let EstoqueSuficienteQuantidade = true;

    this.Produtos.forEach(produto => {
      if (produto.id === this.Produto.id)
      {
        if (this.ValidaProdutoDisponivel(produto))
        {
          produto.quantidadePedido = produto.quantidadePedido + this.Quantidade;
          produtoExistente = true;
          produtosCarrinho.push(produto);
        }
        else
        {
          EstoqueSuficienteQuantidade = false;
        }
      }
      else
      {
        produtosCarrinho.push(produto);
      }
    });

    if (EstoqueSuficienteQuantidade) {

      if (!produtoExistente)
      {
        produtosCarrinho.push(this.ConvertProdutoinCarrinho(this.Produto));
      }

      localStorage.setItem(environment.VariavelProduto, JSON.stringify(produtosCarrinho));
      this.QuantidadeCarrinho = this.QuantidadeCarrinho + this.Quantidade;
      localStorage.setItem(environment.VariavelQuantidade, String(this.QuantidadeCarrinho));

      return  true;
    }
    else
    {
      return false;
    }

  }

  ValidaProdutoDisponivel(produto: IProdutoCarrinho): boolean {
    const ValorMaximo = this.Produto.tipoProdutoId == environment.TipoProdutoEncomenda? this.Produto.quantidadeMaxima : this.Produto.estoque;
    if (ValorMaximo >= (produto.quantidadePedido + this.Quantidade))
    {
      return true;
    }
    else
    {
      return false;
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
      categoriaId: produto.categoriaId,
      quantidadePedido: this.Quantidade
    };
  }

  VoltarPagina(): void {
    this.location.back();
  }
}
