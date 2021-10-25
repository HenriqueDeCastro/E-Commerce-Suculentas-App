import { CartComponent } from './cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartSeparateProductsInventoryResolver } from 'src/app/core/resolvers/cart/cart-separate-products-inventory/cart-separate-products-inventory.resolver';
import { CartSeparateProductsOrderResolver } from 'src/app/core/resolvers/cart/cart-separate-products-order/cart-separate-products-order.resolver';

const routes: Routes = [
  {
    path: '',
    component: CartComponent,
    resolve: {
      productsOrder: CartSeparateProductsInventoryResolver,
      productsInventory: CartSeparateProductsOrderResolver
    }
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
