import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';

import { EmpresaComponent } from './empresa.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: EmpresaComponent,
    children:
    [
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'produto', loadChildren: './produto/produto.module#ProdutoModule', canActivate: [AuthGuard] },
      { path: 'categoria', loadChildren: './categoria/categoria.module#CategoriaModule', canActivate: [AuthGuard] },
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

export class EmpresaRoutingModule { }
