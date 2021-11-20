import { ISaleCount } from './../../../../shared/models/isale-count';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { SaleService } from 'src/app/core/services/sale/sale.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyHomeCountSaleResolver implements Resolve<ISaleCount[]> {

  constructor(
    private saleService: SaleService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISaleCount[]> {
    return this.saleService.getByStatusCountCompany();
  }
}
