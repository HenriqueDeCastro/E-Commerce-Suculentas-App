import { CompanyCategoryEditResolver } from '../../../core/resolvers/company/company-category-edit/company-category-edit.resolver';
import { CompanyCategoryEditComponent } from './company-category-edit/company-category-edit.component';
import { CompanyCategoryHomeResolver } from '../../../core/resolvers/company/company-category-home/company-category-home.resolver';
import { CompanyCategoryAddComponent } from './company-category-add/company-category-add.component';
import { CompanyCategoryHomeComponent } from './company-category-home/company-category-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    component: CompanyCategoryHomeComponent,
    resolve: {
      categorys: CompanyCategoryHomeResolver
    },
  },
  {
    path:'add',
    component: CompanyCategoryAddComponent
  },
  {
    path:'edit/:id',
    component: CompanyCategoryEditComponent,
    resolve: {
      category: CompanyCategoryEditResolver
    },
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
export class CompanyCategoryRoutingModule { }
