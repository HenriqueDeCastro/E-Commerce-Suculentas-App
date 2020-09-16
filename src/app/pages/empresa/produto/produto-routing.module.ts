import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../core/guards/auth.guard';

import { ProdutoComponent } from './produto.component';
import { GeralProdutosComponent } from './geralProdutos/geralProdutos.component';
import { AdicionarProdutoComponent } from './adicionarProduto/adicionarProduto.component';

const routes: Routes = [
  { path: '', component: ProdutoComponent,
    children:
    [
      { path: 'geral', component: GeralProdutosComponent, canActivate: [AuthGuard] },
      { path: 'adicionar', component: AdicionarProdutoComponent, canActivate: [AuthGuard] },
      { path: '', redirectTo: 'geral', pathMatch: 'full' },
      { path: '**', redirectTo: 'geral', pathMatch: 'full' }
    ],
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProdutoRoutingModule { }
