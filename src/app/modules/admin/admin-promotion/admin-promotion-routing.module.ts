import { AdminPromotionAddResolver } from '../../../core/resolvers/admin/admin-promotion-add/admin-promotion-add.resolver';
import { AdminPromotionAddComponent } from './admin-promotion-add/admin-promotion-add.component';
import { AdminPromotionHomeComponent } from './admin-promotion-home/admin-promotion-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPromotionHomeResolver } from 'src/app/core/resolvers/admin/admin-promotion-home/admin-promotion-home.resolver';

const routes: Routes = [
  {
    path:'home',
    component: AdminPromotionHomeComponent,
    resolve: {
      rolesByUser: AdminPromotionHomeResolver
    },
    runGuardsAndResolvers: 'always'
  },
  {
    path:'add',
    component: AdminPromotionAddComponent,
    resolve: {
      roles: AdminPromotionAddResolver
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
export class AdminPromotionRoutingModule { }
