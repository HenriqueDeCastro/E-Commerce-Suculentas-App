import { IProductType } from 'src/app/shared/models/iproduct-type';
import { IProductCart } from 'src/app/shared/models/iproduct-cart';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CryptService } from '../crypt/crypt.service';
import { ProductTypes } from 'src/app/shared/enums/product-types';

const KEY = 'cart';
const PATH = '/';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private coockieService: CookieService,
    private cryptService: CryptService
  ) {}

  returnCart(): IProductCart[] {
    return this.cryptService.descryptObject(this.coockieService.get(KEY)) as IProductCart[];
  }

  saveCart(productCarts: IProductCart[]): void {
    const productsCrypt = this.cryptService.cryptObject(productCarts)
    this.coockieService.set(KEY, productsCrypt, { expires: 7, path: PATH});
  }

  editCart(productEdit: IProductCart, quantity: number): boolean {
    const products: IProductCart[] = this.returnCart();

    if(products?.length > 0) {
      products.forEach((product: IProductCart) => {
        if(product.id == productEdit.id) {
          product.quantityOrder = quantity;
        }
      });

      this.saveCart(products);
      return true;
    }

    return false;
  }

  deleteCart(): void {
    this.coockieService.delete(KEY, PATH);
  }

  deleteCartByType(productType: IProductType): boolean {
    const products: IProductCart[] = this.returnCart();

    if(products?.length > 0) {
      let productsContinue: IProductCart[];

      productsContinue = products.filter(p => p.productTypeId != productType.id);

      this.saveCart(productsContinue);
      return true;
    }

    return false;
  }

  deleteCartByProduct(productRemove: IProductCart): boolean {
    const products: IProductCart[] = this.returnCart();

    if(products?.length > 0) {
      let productsContinue: IProductCart[];

      productsContinue = products.filter(p => p.id != productRemove.id);

      this.saveCart(productsContinue);
      return true;
    }

    return false;
  }
}
