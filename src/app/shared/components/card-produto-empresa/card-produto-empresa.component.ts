import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduto } from '../../models/IProduto';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card-produto-empresa',
  templateUrl: './card-produto-empresa.component.html',
  styleUrls: ['./card-produto-empresa.component.scss']
})
export class CardProdutoEmpresaComponent implements OnInit {

  @Input() produto: IProduto;
  @Input() categoriaNome: string;
  public link: string;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.link = environment.UrlApi;
  }

  ColorEstoque(estoque: number): string {
    if (estoque === 0) {
      return 'zerado';
    }
    if (estoque > 0 && estoque < 4) {
      return 'pouco';
    }
    if (estoque >= 4) {
      return 'otimo';
    }
  }

  Navegar(produtoId, produtoNome): void {
    this.router.navigate(['/empresa/produto/editar/' + produtoId + '/' + produtoNome]);
  }
}
