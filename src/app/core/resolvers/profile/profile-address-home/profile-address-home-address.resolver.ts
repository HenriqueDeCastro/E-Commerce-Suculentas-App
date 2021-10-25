import { IUser } from '../../../../shared/models/iuser';
import { switchMap, take } from 'rxjs/operators';
import { UserService } from './../../../services/user/user.service';
import { IAddress } from './../../../../shared/models/iaddress';
import { AddressService } from './../../../services/address/address.service';
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
export class ProfileAddressHomeAddressResolver implements Resolve<IAddress[]> {

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
