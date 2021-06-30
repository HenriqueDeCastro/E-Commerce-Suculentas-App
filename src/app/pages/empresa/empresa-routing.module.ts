import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';

import { EmpresaComponent } from './empresa.component';
import { HomeComponent } from './home/home.component';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  { path: '', component: EmpresaComponent,
    children:
    [
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard], data: { role: environment.RoleEmpresa } },
      { path: 'produto', loadChildren: './produto/produto.module#ProdutoModule', canActivate: [AuthGuard], data: { role: environment.RoleEmpresa } },
      { path: 'categoria', loadChildren: './categoria/categoria.module#CategoriaModule', canActivate: [AuthGuard], data: { role: environment.RoleEmpresa } },
      { path: 'fretemanual', loadChildren: './frete-manual/frete-manual.module#FreteManualModule', canActivate: [AuthGuard], data: { role: environment.RoleEmpresa } },
      { path: 'vendas', loadChildren: './vendas/vendas.module#VendasModule', canActivate: [AuthGuard], data: { role: environment.RoleEmpresa } },
      { path: 'venda', loadChildren: './venda/venda.module#VendaModule', canActivate: [AuthGuard], data: { role: environment.RoleEmpresa } },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'categoria', pathMatch: 'full' }
    ],
    canActivate: [AuthGuard], data: { role: environment.RoleEmpresa }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EmpresaRoutingModule { }
