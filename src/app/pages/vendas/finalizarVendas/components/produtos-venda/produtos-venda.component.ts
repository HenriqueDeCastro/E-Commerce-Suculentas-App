import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProdutoCarrinho } from 'src/app/shared/models/IProdutoCarrinho';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-produtos-venda',
  templateUrl: './produtos-venda.component.html',
  styleUrls: ['./produtos-venda.component.scss']
})
export class ProdutosVendaComponent implements OnInit {

  @Input() produto: IProdutoCarrinho;
  public link: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.link = environment.UrlApi;
  }

  Navegar() {
    this.router.navigate(['/produtos/' + this.produto.categoriaId  + '/' + this.produto.id + '/' + this.produto.nome]);
  }
}
