import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthGuard } from '../../../core/guards/auth.guard';

import { FreteManualComponent } from './frete-manual.component';

const routes: Routes = [
  { path: '', component: FreteManualComponent, canActivate: [AuthGuard], data: { role: environment.RoleEmpresa }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FreteManualRoutingModule { }
