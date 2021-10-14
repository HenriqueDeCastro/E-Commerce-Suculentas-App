import { IAddress } from './../../../../shared/models/iaddress';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AddressService } from 'src/app/core/services/address/address.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileAddressEditAddressResolver implements Resolve<IAddress> {
  constructor(
    private addressService: AddressService,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IAddress> {
    return  this.addressService.getById(route.params.id);
  }
}
