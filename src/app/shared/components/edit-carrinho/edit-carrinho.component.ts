import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProdutoCarrinho } from '../../models/IProdutoCarrinho';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-carrinho',
  templateUrl: './edit-carrinho.component.html',
  styleUrls: ['./edit-carrinho.component.scss']
})
export class EditCarrinhoComponent implements OnInit {

  @Input() Produto: IProdutoCarrinho;
  @Output() Acao = new EventEmitter<string>();
  public Quantidade: number;
  public QuantidadeMaxima: number;

  constructor() { }

  ngOnInit(): void {
    this.Quantidade = this.Produto.quantidadePedido;
    this.QuantidadeMaximaProdutoDisponivel(this.Produto);
  }

  ReceberQuantidade(value: number): void {
    this.Quantidade = value;
  }

  RemoverItem(): void {
    const Produtos = JSON.parse(localStorage.getItem(environment.VariavelProduto));
    Produtos.forEach((produto, index) => {
      if (produto.id === this.Produto.id) {
        Produtos.splice(index, 1);
      }
    });

    let QuantidadeStorage = JSON.parse(localStorage.getItem(environment.VariavelQuantidade));
    QuantidadeStorage = QuantidadeStorage - this.Produto.quantidadePedido;

    localStorage.setItem(environment.VariavelProduto, JSON.stringify(Produtos));
    localStorage.setItem(environment.VariavelQuantidade, String(QuantidadeStorage));

    this.Acao.emit('Removido');
  }

  EditItem(): void {
    const Produtos = JSON.parse(localStorage.getItem(environment.VariavelProduto));
    let QuantidadeCarrinho = 0;

    Produtos.forEach((produto) => {
      if (produto.id === this.Produto.id) {
        produto.quantidadePedido = this.Quantidade;
      }
      QuantidadeCarrinho = QuantidadeCarrinho + produto.quantidadePedido;
    });

    localStorage.setItem(environment.VariavelProduto, JSON.stringify(Produtos));
    localStorage.setItem(environment.VariavelQuantidade, String(QuantidadeCarrinho));

    this.Acao.emit('Editado');
  }

  QuantidadeMaximaProdutoDisponivel(produto: IProdutoCarrinho) {
    if (produto.tipoProdutoId == environment.TipoProdutoEncomenda)
    {
      this.QuantidadeMaxima = produto.quantidadeMaxima;
    }
    else
    {
      this.QuantidadeMaxima = produto.estoque;
    }
  }

}
