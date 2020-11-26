import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-carrinho',
  templateUrl: './botao-carrinho.component.html',
  styleUrls: ['./botao-carrinho.component.scss']
})
export class BotaoCarrinhoComponent implements OnInit {

  @Input() TipoBotao: string;

  constructor() { }

  ngOnInit() {
  }

}
