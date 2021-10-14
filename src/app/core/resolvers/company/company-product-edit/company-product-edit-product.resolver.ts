import { IProduct } from 'src/app/shared/models/iproduct';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductService } from '../../../services/product/product.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyProductEditProductResolver implements Resolve<IProduct> {

  constructor(
    private productService: ProductService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct> {
    return this.productService.getById(route.params.id);
  }
}
