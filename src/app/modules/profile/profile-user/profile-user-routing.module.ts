import { ProfileUserEditComponent } from './profile-user-edit/profile-user-edit.component';
import { ProfileUserHomeComponent } from './profile-user-home/profile-user-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    component: ProfileUserHomeComponent
  },
  {
    path:'edit',
    component: ProfileUserEditComponent
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
export class ProfileUserRoutingModule { }
