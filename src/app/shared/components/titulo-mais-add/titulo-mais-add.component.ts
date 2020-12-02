import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-titulo-mais-add',
  templateUrl: './titulo-mais-add.component.html',
  styleUrls: ['./titulo-mais-add.component.scss']
})
export class TituloMaisAddComponent implements OnInit {

  @Input() Titulo: string;
  @Input() Rotas: string;

  constructor(public router: Router) { }

  ngOnInit(): void {}

  Navegar(): void {
    this.router.navigate([this.Rotas]);
  }

}
