import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CategoryService } from 'src/app/core/services/category/category.service';
import { ICategory } from 'src/app/shared/models/icategory';

@Injectable({
  providedIn: 'root'
})
export class ProductsHomeCategorysResolver implements Resolve<ICategory[]> {

  constructor(
    private categoryService: CategoryService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICategory[]> {
    return this.categoryService.getHomepage();
  }
}
