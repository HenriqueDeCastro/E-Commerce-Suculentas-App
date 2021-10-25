import { RoleService } from '../../../services/role/role.service';
import { Injectable } from '@angular/core';
import { IRole } from 'src/app/shared/models/irole';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminPromotionAddResolver implements Resolve<IRole[]> {

  constructor(private roleService: RoleService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IRole[]> {
    return this.roleService.getRole();
  }
}
