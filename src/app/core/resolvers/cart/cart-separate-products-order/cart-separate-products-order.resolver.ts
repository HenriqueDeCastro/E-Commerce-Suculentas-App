import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { ProductTypeService } from 'src/app/core/services/product-type/product-type.service';
import { ProductTypes } from 'src/app/shared/enums/product-types';
import { IProductCart } from 'src/app/shared/models/iproduct-cart';
import { IProductType } from 'src/app/shared/models/iproduct-type';

@Injectable({
  providedIn: 'root'
})
export class CartSeparateProductsOrderResolver implements Resolve<IProductCart[] | null> {

  constructor(
    private cartService: CartService,
    private productTypeService: ProductTypeService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProductCart[] | null> {
    const productsCart: IProductCart[] = this.cartService.returnCart();
    const productsType = ProductTypes;

    if(productsCart) {
      return this.productTypeService.getAllWithoutProducts().pipe(
        take(1),
        map((types: IProductType[]) => {
          const type: IProductType = types.filter(t => t.name == productsType.order)[0]
          const productsInventory: IProductCart[] = productsCart.filter(p => p.productTypeId == type.id);
          return productsInventory;
        })
      )
    } else {
      return null!;
    }
  }
}
