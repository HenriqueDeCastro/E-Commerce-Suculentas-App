import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduto } from '../../models/IProduto';
import { environment } from 'src/environments/environment';
import { ICategoria } from '../../models/ICategoria';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.scss']
})
export class CardProdutoComponent implements OnInit {

  @Input() produto: IProduto;
  @Input() Categoria: ICategoria;
  public link: string;
  public tipos: Array<any>;
  public IdEstoque: number;
  public IdEncomenda: number;
  public Disabled: boolean

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.link = environment.UrlApi;
    this.IdEncomenda = environment.TipoProdutoEncomenda;
    this.IdEstoque = environment.TipoProdutoEstoque;
  }

  Navegar(produtoId, produtoNome): void {
    this.router.navigate(['/produtos/' + this.Categoria.nome + '/' + produtoId + '/' + produtoNome]);
  }
}
