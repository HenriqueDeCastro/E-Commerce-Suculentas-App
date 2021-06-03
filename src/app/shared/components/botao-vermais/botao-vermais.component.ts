import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategoria } from '../../models/ICategoria';

@Component({
  selector: 'app-botao-vermais',
  templateUrl: './botao-vermais.component.html',
  styleUrls: ['./botao-vermais.component.scss']
})
export class BotaoVermaisComponent implements OnInit {

  @Input() Categoria: ICategoria;
  @Input() Rota: string;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  Navegar(): void {
    this.router.navigate(
      [this.Rota + this.Categoria.nome + '/' + this.Categoria.id],
      {
        queryParams: {
          page: 1,
          filter: ''
        }
      }
    );
  }
}
