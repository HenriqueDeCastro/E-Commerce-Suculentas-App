import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../core/guards/auth.guard';

import { CategoriaComponent } from './categoria.component';
import { GeralComponent } from './geral/geral.component';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { EditarComponent } from './editar/editar.component';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  { path: '', component: CategoriaComponent,
    children:
    [
      { path: 'geral', component: GeralComponent, canActivate: [AuthGuard], data: { role: environment.RoleEmpresa } },
      { path: 'adicionar', component: AdicionarComponent, canActivate: [AuthGuard], data: { role: environment.RoleEmpresa } },
      { path: 'editar/:categoriaId/:categoriaName', component: EditarComponent, canActivate: [AuthGuard], data: { role: environment.RoleEmpresa } },
      { path: '', redirectTo: 'geral', pathMatch: 'full' },
      { path: '**', redirectTo: 'geral', pathMatch: 'full' }
    ],
    canActivate: [AuthGuard], data: { role: environment.RoleEmpresa }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CategoriaRoutingModule { }
