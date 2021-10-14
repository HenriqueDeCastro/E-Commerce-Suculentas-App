import { ProfileHomeComponent } from './profile-home/profile-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: ProfileHomeComponent
  },
  {
    path: 'user',
    loadChildren:() => import('./profile-user/profile-user.module').then((m) => m.ProfileUserModule),
  },
  {
    path: 'address',
    loadChildren:() => import('./profile-address/profile-address.module').then((m) => m.ProfileAddressModule),
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
