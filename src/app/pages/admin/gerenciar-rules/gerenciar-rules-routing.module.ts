import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../core/guards/auth.guard';

import { GerenciarRulesComponent } from './gerenciar-rules.component';
import { GerenciarRulesAddComponent } from './gerenciar-rules-add/gerenciar-rules-add.component';
import { GerenciarRulesGeralComponent } from './gerenciar-rules-geral/gerenciar-rules-geral.component';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  { path: '', component: GerenciarRulesComponent,
    children:
    [
      { path: 'geral', component: GerenciarRulesGeralComponent, canActivate: [AuthGuard], data: { role: environment.RoleAdmin } },
      { path: 'adicionar', component: GerenciarRulesAddComponent, canActivate: [AuthGuard], data: { role: environment.RoleAdmin } },
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

export class GerenciarRulesRoutingModule { }
