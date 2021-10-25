import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth/auth.guard';
import { LoginGuard } from './core/guard/login/login.guard';
import { Roles } from './shared/enums/roles';

const routes: Routes = [
  {
    path: 'about',
    loadChildren:() => import('./modules/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'admin',
    loadChildren:() => import('./modules/admin/admin.module').then((m) => m.AdminModule),
    canLoad: [AuthGuard],
    data: { role:[Roles.admin]  }
  },
  {
    path: 'cart',
    loadChildren:() => import('./modules/cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'company',
    loadChildren:() => import('./modules/company/company.module').then((m) => m.CompanyModule),
    canLoad: [AuthGuard],
    data: { role:[Roles.admin, Roles.manager]  }
  },
  {
    path: 'not-access',
    loadChildren:() => import('./modules/not-access/not-access.module').then((m) => m.NotAccessModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'page-not-found',
    loadChildren:() => import('./modules/page-not-found/page-not-found.module').then((m) => m.PageNotFoundModule)
  },
  {
    path: 'products',
    loadChildren:() => import('./modules/products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'profile',
    loadChildren:() => import('./modules/profile/profile.module').then((m) => m.ProfileModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'user',
    loadChildren:() => import('./modules/user/user.module').then((m) => m.UserModule),
    canLoad: [LoginGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products'
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
