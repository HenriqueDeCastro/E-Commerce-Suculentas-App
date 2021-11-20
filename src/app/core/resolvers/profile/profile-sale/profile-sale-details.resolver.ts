import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { SaleService } from 'src/app/core/services/sale/sale.service';
import { ISale } from 'src/app/shared/models/isale';

@Injectable({
  providedIn: 'root'
})
export class ProfileSaleDetailsResolver implements Resolve<ISale> {

  constructor(
    private saleService: SaleService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISale> {
    return this.saleService.getById(route.params.saleId);
  }
}
