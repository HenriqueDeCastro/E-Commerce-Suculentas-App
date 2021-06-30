import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { AuthGuard } from '../../../core/guards/auth.guard';

import { VendaComponent } from './venda.component';
import { VendaStatusComponent } from './venda-status/venda-status.component';
import { VendaDetalheComponent } from './venda-detalhe/venda-detalhe.component';

const routes: Routes = [
  { path: '', component: VendaComponent,
    children:
    [
      { path: ':statusId', component: VendaStatusComponent, canActivate: [AuthGuard], data: { role: environment.RoleEmpresa } },
      { path: 'detalhe/:vendaId', component: VendaDetalheComponent, canActivate: [AuthGuard], data: { role: environment.RoleEmpresa } },
      { path: '', redirectTo: 'categoria', pathMatch: 'full' },
      { path: '**', redirectTo: 'categoria', pathMatch: 'full' }
    ],
    canActivate: [AuthGuard], data: { role: environment.RoleEmpresa }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class VendaRoutingModule { }
