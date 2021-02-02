import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../core/guards/auth.guard';

import { PromoverComponent } from './promover.component';
import { PromoverGeralComponent } from './promover-geral/promover-geral.component';
import { PromoverAddComponent } from './promover-add/promover-add.component';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  { path: '', component: PromoverComponent,
    children:
    [
      { path: 'geral', component: PromoverGeralComponent, canActivate: [AuthGuard], data: { role: environment.RoleAdmin } },
      { path: 'adicionar', component: PromoverAddComponent, canActivate: [AuthGuard], data: { role: environment.RoleAdmin } },
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

export class PromoverRoutingModule { }
