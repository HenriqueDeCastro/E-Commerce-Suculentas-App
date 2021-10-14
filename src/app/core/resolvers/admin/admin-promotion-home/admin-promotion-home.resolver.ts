import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { RoleService } from 'src/app/core/services/role/role.service';
import { IRoleByUser } from 'src/app/shared/models/irole-by-user';

@Injectable({
  providedIn: 'root'
})
export class AdminPromotionHomeResolver implements Resolve<IRoleByUser[]> {

  constructor(private roleService: RoleService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IRoleByUser[]> {
    return this.roleService.getRoleByUser();
  }
}
