import { Component, OnInit } from '@angular/core';
import { IProdutoCarrinho } from 'src/app/shared/models/IProdutoCarrinho';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  public ProdutosEncomenda: IProdutoCarrinho[];
  public ProdutosEstoque: IProdutoCarrinho[];
  public TipoEncomenda: number;
  public TipoEstoque: number;
  public link: string;

  constructor() { }

  ngOnInit(): void {
    this.link = environment.UrlApi;
    this.TipoEncomenda = environment.TipoProdutoEncomenda;
    this.TipoEstoque = environment.TipoProdutoEstoque;
    this.ReceberProdutoCarrinho();
  }

  ReceberProdutoCarrinho(): void {
    let Produtos: IProdutoCarrinho[] = JSON.parse(localStorage.getItem(environment.VariavelProduto));
    this.SepararTiposProdutos(Produtos);
  }

  ReceberAtt(event: boolean): void {
    if (event) {
      let Produtos: IProdutoCarrinho[] = JSON.parse(localStorage.getItem(environment.VariavelProduto));
      this.SepararTiposProdutos(Produtos);
    }
  }

  SepararTiposProdutos(Produtos: IProdutoCarrinho[]) {
    this.ProdutosEncomenda = Produtos.filter(p => p.tipoProdutoId == this.TipoEncomenda);
    this.ProdutosEstoque = Produtos.filter(p => p.tipoProdutoId == this.TipoEstoque);
  }
}
