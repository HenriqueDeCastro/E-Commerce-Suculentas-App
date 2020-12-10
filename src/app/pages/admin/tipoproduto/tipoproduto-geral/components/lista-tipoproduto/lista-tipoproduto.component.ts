import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITipoProduto } from 'src/app/shared/models/ITipoProduto';

@Component({
  selector: 'app-lista-tipoproduto',
  templateUrl: './lista-tipoproduto.component.html',
  styleUrls: ['./lista-tipoproduto.component.scss']
})
export class ListaTipoprodutoComponent implements OnInit {

  @Input() TipoProdutos: ITipoProduto[];

  constructor(public router: Router) { }

  ngOnInit(): void {}

  Navegar(tipoProdutoNome, tipoProdutoId): void {
    this.router.navigate(['/admin/tipoproduto/editar/' + tipoProdutoId + '/' + tipoProdutoNome]);
  }

}
