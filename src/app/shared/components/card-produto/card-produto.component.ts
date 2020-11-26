import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduto } from '../../models/IProduto';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.scss']
})
export class CardProdutoComponent implements OnInit {

  @Input() produto: IProduto;
  @Input() categoriaNome: string;
  public link: string;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.link = environment.UrlApi;
  }

  Navegar(produtoId, produtoNome): void {
    this.router.navigate(['/produtos/' + this.categoriaNome + '/' + produtoId + '/' + produtoNome]);
  }
}
