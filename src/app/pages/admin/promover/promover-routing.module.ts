import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../core/guards/auth.guard';

import { PromoverComponent } from './promover.component';
import { PromoverGeralComponent } from './promover-geral/promover-geral.component';

const routes: Routes = [
  { path: '', component: PromoverComponent,
    children:
    [
      { path: 'geral', component: PromoverGeralComponent, canActivate: [AuthGuard] },
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

export class PromoverRoutingModule { }
