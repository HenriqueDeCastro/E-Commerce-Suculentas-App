import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-categoria-vazia',
  templateUrl: './lista-categoria-vazia.component.html',
  styleUrls: ['./lista-categoria-vazia.component.scss']
})
export class ListaCategoriaVaziaComponent implements OnInit {

  @Input() Titulo: string;
  @Input() Mensagem: string;

  constructor() { }

  ngOnInit(): void {}

}
