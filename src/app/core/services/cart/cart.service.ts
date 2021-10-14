import { IProductCart } from './../../../shared/models/iproduct-cart';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CryptService } from '../crypt/crypt.service';

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

  deleteCart(): void {
    this.coockieService.delete(KEY, PATH);
  }
}
