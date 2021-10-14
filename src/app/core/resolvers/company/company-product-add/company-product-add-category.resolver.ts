import { ICategory } from 'src/app/shared/models/icategory';
import { CategoryService } from '../../../services/category/category.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyProductAddCategoryResolver implements Resolve<ICategory[]> {

  constructor(
    private categoryService: CategoryService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICategory[]> {
    return this.categoryService.getAllWithoutProducts();
  }
}
