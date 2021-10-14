import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { RoleService } from 'src/app/core/services/role/role.service';
import { IRole } from 'src/app/shared/models/irole';

@Injectable({
  providedIn: 'root'
})
export class AdminRoleResolver implements Resolve<IRole[]> {

  constructor(
    private roleService: RoleService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IRole[]> {
    return this.roleService.getRole();
  }
}
