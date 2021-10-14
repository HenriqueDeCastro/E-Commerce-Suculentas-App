import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CategoryService } from 'src/app/core/services/category/category.service';
import { ICategoryPagination } from 'src/app/shared/models/icategory-pagination';

@Injectable({
  providedIn: 'root'
})
export class ProductsCategoryCategoryResolver implements Resolve<ICategoryPagination> {

  constructor(
    private categoryService: CategoryService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICategoryPagination> {
    return this.categoryService.getByClient(route.params.id, 0,route.queryParams.orderBy ?? '', route.queryParams.search ?? '');
  }
}
