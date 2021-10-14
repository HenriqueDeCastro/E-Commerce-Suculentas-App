import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyManualFreightComponent } from './company-manual-freight.component';

const routes: Routes = [
  {
    path:'',
    component: CompanyManualFreightComponent
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyManualFreightRoutingModule { }
