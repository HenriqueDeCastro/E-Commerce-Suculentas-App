import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductTypeService } from 'src/app/core/services/product-type/product-type.service';
import { IProductType } from 'src/app/shared/models/iproduct-type';

@Injectable({
  providedIn: 'root'
})
export class ProductsUnitaryProductsTypeResolver implements Resolve<IProductType[]> {

  constructor(
    private productTypeService: ProductTypeService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProductType[]> {
    return this.productTypeService.getAllWithoutProducts()
  }
}
