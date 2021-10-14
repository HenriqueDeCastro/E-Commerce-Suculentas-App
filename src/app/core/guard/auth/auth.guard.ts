import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.userService.loggedIn() && !this.userService.expiredToken()) {
      if(route.data?.role) {
        return this.accessProfile(route);
      }
      else {
        return true;
      }
    }
    else {
      this.userService.logout();
      return this.returnUrl(segments);
    }
  }

  accessProfile(route: Route): boolean {
    if(this.userService.verifyAcessRole(route.data?.role as string[])) {
      return true
    }
    else {
      this.router.navigate(['not-access'])
      return false;
    }
  }

  returnUrl(state: UrlSegment[]): boolean {
    this.router.navigate(['/user/login'], {
      queryParams: {
        fromUrl: state[0].path
      }
    });
    return false;
  }
}
