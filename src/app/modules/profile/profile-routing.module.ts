import { ProfileHomeCountSaleResolver } from './../../core/resolvers/profile/profile-home/profile-home-count-sale.resolver';
import { ProfileHomeComponent } from './profile-home/profile-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'address',
    loadChildren:() => import('./profile-address/profile-address.module').then((m) => m.ProfileAddressModule),
  },
  {
    path: 'home',
    component: ProfileHomeComponent,
    resolve: {
      saleCount: ProfileHomeCountSaleResolver
    }
  },
  {
    path: 'sale',
    loadChildren:() => import('./profile-sale/profile-sale.module').then((m) => m.ProfileSaleModule),
  },
  {
    path: 'user',
    loadChildren:() => import('./profile-user/profile-user.module').then((m) => m.ProfileUserModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
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
export class ProfileRoutingModule { }
