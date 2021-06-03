import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPedido } from 'src/app/shared/models/IPedido';
import { IProduto } from 'src/app/shared/models/IProduto';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-produto-compra-detalhe',
  templateUrl: './produto-compra-detalhe.component.html',
  styleUrls: ['./produto-compra-detalhe.component.scss']
})
export class ProdutoCompraDetalheComponent implements OnInit {

  public link: string;
  @Input() produto: IProduto;
  @Input() pedido: IPedido;

  constructor(private router: Router) { }

  ngOnInit() {
    this.link = environment.UrlApi;
  }

  Navegar(): void {
    this.router.navigate(['/produtos/' + this.produto.categoriaId  + '/' + this.produto.id + '/' + this.produto.nome]);
  }
}
