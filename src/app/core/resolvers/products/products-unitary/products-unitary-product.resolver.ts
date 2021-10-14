import { ProductService } from './../../../services/product/product.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { IProduct } from 'src/app/shared/models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsUnitaryProductResolver implements Resolve<IProduct> {

  constructor(
    private productService: ProductService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct> {
    return this.productService.getById(route.params.id);
  }
}
