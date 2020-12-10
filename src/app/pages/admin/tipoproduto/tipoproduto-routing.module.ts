import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../core/guards/auth.guard';

import { TipoprodutoGeralComponent } from './tipoproduto-geral/tipoproduto-geral.component';
import { TipoprodutoAddComponent } from './tipoproduto-add/tipoproduto-add.component';
import { TipoprodutoEditComponent } from './tipoproduto-edit/tipoproduto-edit.component';
import { TipoprodutoComponent } from './tipoproduto.component';

const routes: Routes = [
  { path: '', component: TipoprodutoComponent,
    children:
    [
      { path: 'geral', component: TipoprodutoGeralComponent, canActivate: [AuthGuard] },
      { path: 'adicionar', component: TipoprodutoAddComponent, canActivate: [AuthGuard] },
      { path: 'editar/:tipoProdutoId/:tipoProdutoName', component: TipoprodutoEditComponent, canActivate: [AuthGuard] },
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

export class TipoProdutoRoutingModule { }
