import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../../core/guards/auth.guard';

import { ComprasComponent } from './compras.component';
import { ComprasStatusComponent } from './compras-status/compras-status.component';

const routes: Routes = [
  { path: '', component: ComprasComponent,
    children:
    [
      { path: ':statusId', component: ComprasStatusComponent, canActivate: [AuthGuard]  },
      { path: '', redirectTo: 'perfil', pathMatch: 'full' },
      { path: '**', redirectTo: 'perfil', pathMatch: 'full' }
    ],
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ComprasRoutingModule { }
