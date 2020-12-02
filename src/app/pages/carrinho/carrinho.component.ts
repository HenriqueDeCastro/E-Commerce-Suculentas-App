import { Component, OnInit } from '@angular/core';
import { IProdutoCarrinho } from 'src/app/shared/models/IProdutoCarrinho';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  public Produtos: IProdutoCarrinho[];
  public link: string;

  constructor() { }

  ngOnInit(): void {
    this.link = environment.UrlApi;
    this.ReceberProdutoCarrinho();
  }

  ReceberProdutoCarrinho(): void {
    this.Produtos = JSON.parse(localStorage.getItem(environment.VariavelProduto));
  }

  ReceberAtt(event: boolean): void {
    if (event) {
      this.Produtos = JSON.parse(localStorage.getItem(environment.VariavelProduto));
    }
  }
}
