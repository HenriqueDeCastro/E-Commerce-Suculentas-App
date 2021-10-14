import { AdminHomeComponent } from './admin-home/admin-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    component: AdminHomeComponent
  },
  {
    path: 'roles',
    loadChildren:() => import('./admin-roles/admin-roles.module').then((m) => m.AdminRolesModule)
  },
  {
    path: 'promotion',
    loadChildren:() => import('./admin-promotion/admin-promotion.module').then((m) => m.AdminPromotionModule)
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
export class AdminRoutingModule { }
