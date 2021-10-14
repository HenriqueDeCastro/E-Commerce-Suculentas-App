import { CompanyProductHomeComponent } from './company-product-home/company-product-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyProductAddComponent } from './company-product-add/company-product-add.component';
import { CompanyProductAddCategoryResolver } from 'src/app/core/resolvers/company/company-product-add/company-product-add-category.resolver';
import { CompanyProductAddProductTypeResolver } from 'src/app/core/resolvers/company/company-product-add/company-product-add-product-type.resolver';
import { CompanyProductEditComponent } from './company-product-edit/company-product-edit.component';
import { CompanyProductCategoryComponent } from './company-product-category/company-product-category.component';
import { CompanyProductEditCategorysResolver } from 'src/app/core/resolvers/company/company-product-edit/company-product-edit-categorys.resolver';
import { CompanyProductEditProductResolver } from 'src/app/core/resolvers/company/company-product-edit/company-product-edit-product.resolver';
import { CompanyProductEditProductTypesResolver } from 'src/app/core/resolvers/company/company-product-edit/company-product-edit-product-types.resolver';
import { CompanyProductHomeProductCategorysResolver } from 'src/app/core/resolvers/company/company-product-home/company-product-home-product-categorys.resolver';
import { CompanyProductHomeProductTypesResolver } from 'src/app/core/resolvers/company/company-product-home/company-product-home-product-types.resolver';
import { CompanyProductCategoryCategoryResolver } from 'src/app/core/resolvers/company/company-product-category/company-product-category-category.resolver';
import { CompanyProductCategoryProductTypesResolver } from 'src/app/core/resolvers/company/company-product-category/company-product-category-product-types.resolver';

const routes: Routes = [
  {
    path:'home',
    component: CompanyProductHomeComponent,
    resolve: {
      categorys: CompanyProductHomeProductCategorysResolver,
      productTypes: CompanyProductHomeProductTypesResolver
    }
  },
  {
    path:'add',
    component: CompanyProductAddComponent,
    resolve: {
      categorys: CompanyProductAddCategoryResolver,
      productsType: CompanyProductAddProductTypeResolver
    }
  },
  {
    path:'edit/:id',
    component: CompanyProductEditComponent,
    resolve: {
      categorys: CompanyProductEditCategorysResolver,
      productsType: CompanyProductEditProductTypesResolver,
      product: CompanyProductEditProductResolver
    }
  },
  {
    path:':name/:id',
    component: CompanyProductCategoryComponent,
    resolve: {
      category: CompanyProductCategoryCategoryResolver,
      productsType: CompanyProductCategoryProductTypesResolver,
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
export class CompanyProductRoutingModule { }
