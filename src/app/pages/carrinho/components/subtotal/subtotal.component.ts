import { Component, Input, OnInit } from '@angular/core';
import { IProdutoCarrinho } from 'src/app/shared/models/IProdutoCarrinho';

@Component({
  selector: 'app-subtotal',
  templateUrl: './subtotal.component.html',
  styleUrls: ['./subtotal.component.scss']
})
export class SubtotalComponent implements OnInit {

  @Input() Produtos: IProdutoCarrinho[];

  constructor() { }

  ngOnInit() {
  }

  CalcularTotal(): number {
    let total: number = 0;
    this.Produtos.forEach((produto: IProdutoCarrinho) => {
      total = total + (produto.preco * produto.quantidadePedido);
    });

    return total;
  }
}
