import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../core/guards/auth.guard';

import { TipoprodutoGeralComponent } from './tipoproduto-geral/tipoproduto-geral.component';
import { TipoprodutoAddComponent } from './tipoproduto-add/tipoproduto-add.component';
import { TipoprodutoEditComponent } from './tipoproduto-edit/tipoproduto-edit.component';
import { TipoprodutoComponent } from './tipoproduto.component';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  { path: '', component: TipoprodutoComponent,
    children:
    [
      { path: 'geral', component: TipoprodutoGeralComponent, canActivate: [AuthGuard], data: { role: environment.RoleAdmin } },
      { path: 'adicionar', component: TipoprodutoAddComponent, canActivate: [AuthGuard], data: { role: environment.RoleAdmin } },
      { path: 'editar/:tipoProdutoId/:tipoProdutoName', component: TipoprodutoEditComponent, canActivate: [AuthGuard], data: { role: environment.RoleAdmin } },
      { path: '', redirectTo: 'geral', pathMatch: 'full' },
      { path: '**', redirectTo: 'geral', pathMatch: 'full' }
    ],
    canActivate: [AuthGuard], data: { role: environment.RoleAdmin }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TipoProdutoRoutingModule { }
