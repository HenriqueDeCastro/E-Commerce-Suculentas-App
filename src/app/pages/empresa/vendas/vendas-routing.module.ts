import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { AuthGuard } from '../../../core/guards/auth.guard';

import { VendasComponent } from './vendas.component';
import { VendasStatusComponent } from './vendas-status/vendas-status.component';
import { VendasDetalheComponent } from './vendas-detalhe/vendas-detalhe.component';

const routes: Routes = [
  { path: '', component: VendasComponent,
    children:
    [
      { path: ':statusId', component: VendasStatusComponent, canActivate: [AuthGuard], data: { role: environment.RoleEmpresa } },
      { path: 'detalhe/:vendaId', component: VendasDetalheComponent, canActivate: [AuthGuard], data: { role: environment.RoleEmpresa } },
      { path: '', redirectTo: 'empresa', pathMatch: 'full' },
      { path: '**', redirectTo: 'empresa', pathMatch: 'full' }
    ],
    canActivate: [AuthGuard], data: { role: environment.RoleEmpresa }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class VendasRoutingModule { }
