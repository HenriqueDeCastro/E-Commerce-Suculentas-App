import { ISalePagination } from './../../../../shared/models/isale-pagination';
import { SaleService } from './../../../services/sale/sale.service';
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
export class CompanySaleStatusResolver implements Resolve<ISalePagination> {

  constructor(
    private saleService: SaleService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISalePagination> {
    return this.saleService.getByStatus(route.params.statusId, 0)
  }
}
