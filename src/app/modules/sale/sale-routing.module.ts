import { CompletedComponent } from './completed/completed.component';
import { FinalizeSaleComponent } from './finalize-sale/finalize-sale.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalizeSaleProductResolver } from 'src/app/core/resolvers/sale/finalize-sale/finalize-sale-product.resolver';
import { FinalizeSaleAddressResolver } from 'src/app/core/resolvers/sale/finalize-sale/finalize-sale-address.resolver';

const routes: Routes = [
  {
    path:'finalize/:productTypeName',
    component: FinalizeSaleComponent,
    resolve: {
      products: FinalizeSaleProductResolver,
      adresses: FinalizeSaleAddressResolver
    }
  },
  {
    path:'completed/:saleId',
    component: CompletedComponent
  },
  {
    path: '',
    redirectTo: '/cart',
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
export class SaleRoutingModule { }
