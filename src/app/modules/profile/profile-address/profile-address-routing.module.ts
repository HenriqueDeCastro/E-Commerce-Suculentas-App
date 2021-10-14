import { ProfileAddressEditComponent } from './profile-address-edit/profile-address-edit.component';
import { ProfileAddressHomeComponent } from './profile-address-home/profile-address-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileAddressAddComponent } from './profile-address-add/profile-address-add.component';
import { ProfileAddressHomeAddressResolver } from 'src/app/core/resolvers/profile/profile-address-home/profile-address-home-address.resolver';
import { ProfileAddressEditAddressResolver } from 'src/app/core/resolvers/profile/profile-address-edit/profile-address-edit-address.resolver';

const routes: Routes = [
  {
    path:'home',
    component: ProfileAddressHomeComponent,
    resolve: {
      addresses: ProfileAddressHomeAddressResolver
    },
    runGuardsAndResolvers: 'always'
  },
  {
    path:'add',
    component: ProfileAddressAddComponent
  },
  {
    path:'edit/:id',
    component: ProfileAddressEditComponent,
    resolve: {
      address: ProfileAddressEditAddressResolver
    }
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
export class ProfileAddressRoutingModule { }
