import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITipoCategoria } from 'src/app/shared/models/ITipoCategoria';

@Component({
  selector: 'app-lista-tipocategoria',
  templateUrl: './lista-tipocategoria.component.html',
  styleUrls: ['./lista-tipocategoria.component.scss']
})
export class ListaTipocategoriaComponent implements OnInit {

  @Input() TipoCategorias: ITipoCategoria[];

  constructor(public router: Router) { }

  ngOnInit(): void {}

  Navegar(tipoCategoriaNome, tipoCategoriaId): void {
    this.router.navigate(['/admin/tipocategoria/editar/' + tipoCategoriaId + '/' + tipoCategoriaNome]);
  }
}
