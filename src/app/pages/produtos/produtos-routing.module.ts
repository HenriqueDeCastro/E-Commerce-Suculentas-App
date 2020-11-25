import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutosComponent } from './produtos.component';
import { ProdutosHomeComponent } from './produtosHome/produtosHome.component';
import { ProdutosEspecificoComponent } from './produtos-especifico/produtos-especifico.component';
import { ProdutoUnitarioComponent } from './produto-unitario/produto-unitario.component';

const routes: Routes = [
  { path: '', component: ProdutosComponent,
    children:
    [
      { path: 'home', component: ProdutosHomeComponent },
      { path: ':categoriaId/:categoriaName', component: ProdutosEspecificoComponent },
      { path: ':categoriaName/:produtoId/:produtoName', component: ProdutoUnitarioComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProdutosRoutingModule { }
