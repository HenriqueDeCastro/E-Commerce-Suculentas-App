import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { IProductType } from 'src/app/shared/models/iproduct-type';
import { ProductTypeService } from '../../../services/product-type/product-type.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyProductHomeProductTypesResolver implements Resolve<IProductType[]> {

  constructor(
    private productTypeService: ProductTypeService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProductType[]> {
    return this.productTypeService.getAllWithoutProducts();
  }
}
