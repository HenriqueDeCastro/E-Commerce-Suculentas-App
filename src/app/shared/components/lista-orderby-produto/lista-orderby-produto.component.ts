import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lista-orderby-produto',
  templateUrl: './lista-orderby-produto.component.html',
  styleUrls: ['./lista-orderby-produto.component.scss']
})
export class ListaOrderbyProdutoComponent implements OnInit {

  @Output() TipoOrdenacao = new EventEmitter<string>();
  @Input() Estoque = false;
  public env = environment;
  public OrderByQueryString: string;

  constructor(private activetedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activetedRoute.queryParams.subscribe(params => this.OrderByQueryString = params.orderBy);
  }

  Fechar(value: string): void{
    if(this.OrderByQueryString != value) {
      this.TipoOrdenacao.emit(value);
    } else {
      this.TipoOrdenacao.emit(null);
    }
  }
}
