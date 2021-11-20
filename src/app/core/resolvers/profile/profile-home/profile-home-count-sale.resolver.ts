import { IUser } from './../../../../shared/models/iuser';
import { take, switchMap } from 'rxjs/operators';
import { UserService } from './../../../services/user/user.service';
import { ISaleCount } from './../../../../shared/models/isale-count';
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
export class ProfileHomeCountSaleResolver implements Resolve<ISaleCount[]> {

  constructor(
    private saleService: SaleService,
    private userService: UserService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISaleCount[]> {
    return this.userService.returnUser().pipe(
      take(1),
      switchMap((user: IUser) => {
        return this.saleService.getByStatusCountUser(user.id!);
      })
    )
  }
}
