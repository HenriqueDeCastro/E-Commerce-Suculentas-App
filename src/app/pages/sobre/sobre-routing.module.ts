import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../core/guards/auth.guard';

import { SobreComponent } from './sobre.component';

const routes: Routes = [
  { path: '', component: SobreComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SobreRoutingModule { }
