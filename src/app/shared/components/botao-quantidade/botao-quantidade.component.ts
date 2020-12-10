import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-botao-quantidade',
  templateUrl: './botao-quantidade.component.html',
  styleUrls: ['./botao-quantidade.component.scss']
})
export class BotaoQuantidadeComponent implements OnInit {

  @Input() Quantidade: number;
  @Input() QuantidadeMaxima: number;
  @Output() QuantidadeEscolhida = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {}

  AumentarQuantidade(): void {
    this.Quantidade = this.Quantidade + 1;
    this.QuantidadeEscolhida.emit(this.Quantidade);
  }

  DiminuirQuantidade(): void {
    this.Quantidade = this.Quantidade - 1;
    this.QuantidadeEscolhida.emit(this.Quantidade);
  }
}
