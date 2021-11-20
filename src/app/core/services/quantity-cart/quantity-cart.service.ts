import { IProductCart } from 'src/app/shared/models/iproduct-cart';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';
import { CryptService } from '../crypt/crypt.service';

const KEY = 'quantity';
const PATH = '/';

@Injectable({
  providedIn: 'root'
})
export class QuantityCartService {

  private quantitySubject = new BehaviorSubject<number>(null!);

  constructor(
    private coockieService: CookieService,
    private cryptService: CryptService
    ) {
    if(this.hasQuantity()) {
      this.insertQuantity();
    }
  }

  private insertQuantity() {
    const quantity = this.returnQuantity();
    this.quantitySubject.next(quantity);
  }

  returnQuantity(): number {
    return Number(this.cryptService.descryptText(this.coockieService.get(KEY)));
  }

  returnQuantityObservable(): Observable<number> {
    return this.quantitySubject.asObservable();
  }

  saveQuantity(quantity: number): void {
    this.quantitySubject.next(quantity);
    const quantityCrypt = this.cryptService.cryptText(quantity.toString())
    this.coockieService.set(KEY, quantityCrypt, { expires: 7, path: PATH});
  }

  hasQuantity(): boolean {
    return !!this.returnQuantity();
  }

  deleteQuantity(): void {
    this.quantitySubject.next(null!);
    this.coockieService.delete(KEY, PATH);
  }

  deleteQuantityByProducts(products: IProductCart[]): void {
    let quantityContinue: number = 0;
    products.forEach((product: IProductCart) => {
      quantityContinue += product.quantityOrder;
    });

    this.saveQuantity(quantityContinue);
  }
}
