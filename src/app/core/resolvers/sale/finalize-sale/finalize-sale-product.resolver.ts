import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { IProductCart } from 'src/app/shared/models/iproduct-cart';

@Injectable({
  providedIn: 'root'
})
export class FinalizeSaleProductResolver implements Resolve<IProductCart[] | null> {

  constructor(
    private cartService: CartService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IProductCart[] | null {
    const productsCart = this.cartService.returnCart();
    const typeUrl: string = route.params.productTypeName;

    if(productsCart) {
      const products: IProductCart[] = productsCart.filter(p => p.productTypeName == typeUrl.toLocaleUpperCase());

      if(products)
        return products;

      return null!
    }

    return null!;
  }
}
