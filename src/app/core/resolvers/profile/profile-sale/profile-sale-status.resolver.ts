import { IUser } from './../../../../shared/models/iuser';
import { take, switchMap } from 'rxjs/operators';
import { UserService } from './../../../services/user/user.service';
import { SaleService } from './../../../services/sale/sale.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ISalePagination } from 'src/app/shared/models/isale-pagination';

@Injectable({
  providedIn: 'root'
})
export class ProfileSaleStatusResolver implements Resolve<ISalePagination> {

  constructor(
    private saleService: SaleService,
    private userService: UserService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISalePagination> {
    return this.userService.returnUser().pipe(
      take(1),
      switchMap((user: IUser) => {
        return this.saleService.getStatusByUser(user.id!, route.params.statusId, 0)
      })
    )
  }
}
