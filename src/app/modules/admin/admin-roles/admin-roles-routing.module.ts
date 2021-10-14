import { AdminRolesAddComponent } from './admin-roles-add/admin-roles-add.component';
import { AdminRolesHomeComponent } from './admin-roles-home/admin-roles-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRoleResolver } from 'src/app/core/resolvers/admin/admin-role/admin-role.resolver';

const routes: Routes = [
  {
    path:'home',
    component: AdminRolesHomeComponent,
    resolve: {
      roles: AdminRoleResolver
    }
  },
  {
    path:'add',
    component: AdminRolesAddComponent
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
export class AdminRolesRoutingModule { }
