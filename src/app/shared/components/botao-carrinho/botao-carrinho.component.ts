import { Component, Input, OnInit } from '@angular/core';
import { IProdutoCarrinho } from '../../models/IProdutoCarrinho';
import { IProduto } from '../../models/IProduto';
import { Location } from '@angular/common';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-botao-carrinho',
  templateUrl: './botao-carrinho.component.html',
  styleUrls: ['./botao-carrinho.component.scss']
})
export class BotaoCarrinhoComponent implements OnInit {

  @Input() TipoBotao: string;
  @Input() Quantidade: number;
  @Input() Desabilitar: boolean;
  @Input() Voltar: boolean = false;
  @Input() Produto: IProduto;
  private Produtos: IProdutoCarrinho[];
  private QuantidadeCarrinho: number;

  constructor(private snackbar: SnackbarComponent,
              private location: Location) { }

  ngOnInit(): void {
  }

  ColocarCarrinho(): void {
    const produtosCarrinho = [];
    this.Produtos = JSON.parse(localStorage.getItem('produtos'));
    this.QuantidadeCarrinho = JSON.parse(localStorage.getItem('quantidade'));

    if (this.Produtos == null) {
      localStorage.setItem('produtos', JSON.stringify([this.ConvertProdutoinCarrinho(this.Produto)]));
      localStorage.setItem('quantidade', String(this.Quantidade));
    }
    else {
      this.Produtos.forEach(produto => {
        produtosCarrinho.push(produto);
      });
      produtosCarrinho.push(this.ConvertProdutoinCarrinho(this.Produto));
      localStorage.setItem('produtos', JSON.stringify(produtosCarrinho));

      this.QuantidadeCarrinho = this.QuantidadeCarrinho + this.Quantidade;
      localStorage.setItem('quantidade', String(this.QuantidadeCarrinho));
    }

    this.snackbar.OpenSnackBarSuccess('Produto adicionado ao carrinho');
    if (this.Voltar) {
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
      categoriaId: produto.categoriaId,
      quantidadePedido: this.Quantidade
    };
  }

  VoltarPagina(): void {
    this.location.back();
  }
}
