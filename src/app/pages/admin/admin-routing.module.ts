import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';

import { AdminComponent } from './admin.component';
import { HomeAdminComponent } from './homeAdmin/homeAdmin.component';

const routes: Routes = [
  { path: '', component: AdminComponent,
    children:
    [
      { path: 'home', component: HomeAdminComponent, canActivate: [AuthGuard] },
      { path: 'tipoproduto', loadChildren: './tipoproduto/tipoproduto.module#TipoProdutoModule', canActivate: [AuthGuard] },
      { path: 'promover', loadChildren: './promover/promover.module#PromoverModule', canActivate: [AuthGuard] },
      { path: 'gerenciarrules', loadChildren: './gerenciar-rules/gerenciar-rules.module#GerenciarRulesModule', canActivate: [AuthGuard] },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ],
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
