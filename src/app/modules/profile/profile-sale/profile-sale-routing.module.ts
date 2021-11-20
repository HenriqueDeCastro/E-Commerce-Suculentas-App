import { ProfileSaleDetailsResolver } from './../../../core/resolvers/profile/profile-sale/profile-sale-details.resolver';
import { ProfileSaleDetailsComponent } from './profile-sale-details/profile-sale-details.component';
import { ProfileSaleStatusComponent } from './profile-sale-status/profile-sale-status.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileSaleStatusResolver } from 'src/app/core/resolvers/profile/profile-sale/profile-sale-status.resolver';

const routes: Routes = [
  {
    path:':statusId',
    component: ProfileSaleStatusComponent,
    resolve: {
      sales: ProfileSaleStatusResolver
    },
  },
  {
    path:'details/:saleId',
    component: ProfileSaleDetailsComponent,
    resolve: {
      sale: ProfileSaleDetailsResolver
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
export class ProfileSaleRoutingModule { }
