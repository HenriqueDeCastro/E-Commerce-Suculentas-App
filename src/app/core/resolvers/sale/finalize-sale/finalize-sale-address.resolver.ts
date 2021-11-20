import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { AddressService } from 'src/app/core/services/address/address.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { IAddress } from 'src/app/shared/models/iaddress';
import { IUser } from 'src/app/shared/models/iuser';

@Injectable({
  providedIn: 'root'
})
export class FinalizeSaleAddressResolver implements Resolve<IAddress[]> {

  constructor(
    private addressService: AddressService,
    private userService: UserService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IAddress[]> {
    return this.userService.returnUser().pipe(
      take(1),
      switchMap((user: IUser) => this.addressService.getByUserId(user.id!))
    )
  }
}
