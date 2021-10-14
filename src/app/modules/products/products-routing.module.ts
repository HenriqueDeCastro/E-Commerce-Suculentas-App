import { ProductsUnitaryComponent } from './products-unitary/products-unitary.component';
import { ProductsByCategoryComponent } from './products-by-category/products-by-category.component';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsHomeProductTypesResolver } from 'src/app/core/resolvers/products/products-home/products-home-product-types.resolver';
import { ProductsHomeCategorysResolver } from 'src/app/core/resolvers/products/products-home/products-home-categorys.resolver';
import { ProductsCategoryCategoryResolver } from 'src/app/core/resolvers/products/products-category/products-category-category.resolver';
import { ProductsCategoryProductsTypesResolver } from 'src/app/core/resolvers/products/products-category/products-category-products-types.resolver';
import { ProductsUnitaryProductResolver } from 'src/app/core/resolvers/products/products-unitary/products-unitary-product.resolver';
import { ProductsUnitaryProductsTypeResolver } from 'src/app/core/resolvers/products/products-unitary/products-unitary-products-type.resolver';

const routes: Routes = [
  {
    path:'home',
    component: ProductsHomeComponent,
    resolve: {
      categorys: ProductsHomeCategorysResolver,
      productTypes: ProductsHomeProductTypesResolver
    }
  },
  {
    path:'category/:name/:id',
    component: ProductsByCategoryComponent,
    resolve: {
      category: ProductsCategoryCategoryResolver,
      productsType: ProductsCategoryProductsTypesResolver,
    }
  },
  {
    path: ':name/:id',
    component: ProductsUnitaryComponent,
    resolve: {
      product: ProductsUnitaryProductResolver,
      productsType: ProductsUnitaryProductsTypeResolver,
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
export class ProductsRoutingModule { }
