import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lista-orderby-produto',
  templateUrl: './lista-orderby-produto.component.html',
  styleUrls: ['./lista-orderby-produto.component.scss']
})
export class ListaOrderbyProdutoComponent implements OnInit {

  @Output() TipoOrdenacao = new EventEmitter<string>();
  @Input() Estoque = false;

  constructor() { }

  ngOnInit(): void {}

  Fechar(value: string): void{
    this.TipoOrdenacao.emit(value);
  }
}
