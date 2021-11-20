import { CompanySaleDetailsResolver } from './../../../core/resolvers/company/company-sale/company-sale-details.resolver';
import { CompanySaleDetailsComponent } from './company-sale-details/company-sale-details.component';
import { CompanySaleStatusComponent } from './company-sale-status/company-sale-status.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanySaleStatusResolver } from 'src/app/core/resolvers/company/company-sale/company-sale-status.resolver';

const routes: Routes = [
  {
    path:':statusId',
    component: CompanySaleStatusComponent,
    resolve: {
      sales: CompanySaleStatusResolver
    },
  },
  {
    path:'details/:saleId',
    component: CompanySaleDetailsComponent,
    resolve: {
      sale: CompanySaleDetailsResolver
    },
  },
  {
    path: '',
    redirectTo: '/profile/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanySaleRoutingModule { }
