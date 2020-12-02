import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategoria } from 'src/app/shared/models/ICategoria';

@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.scss']
})
export class ListaCategoriaComponent implements OnInit {

  @Input() Categorias: ICategoria[];
  @Input() Titulo: string;

  constructor(public router: Router) { }

  ngOnInit(): void {}

  Navegar(categoriaNome, categoriaId): void {
    this.router.navigate(['/empresa/categoria/editar/' + categoriaId + '/' + categoriaNome]);
  }
}
