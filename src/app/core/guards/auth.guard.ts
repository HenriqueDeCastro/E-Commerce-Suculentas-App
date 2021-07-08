import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/server/Auth/Auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService) {}

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage.getItem(environment.VariavelToken) != null) {

      if(this.authService.LoggedIn()) {
        localStorage.removeItem(environment.VariavelToken);
        this.ReturnUrl(state);
        return false;
      } else {
        if(next.data.role) {
          if(this.authService.VerifyAcessRole(next.data.role)) {
            return true;
          } else {
            this.router.navigate(['/user/sem-acesso']);
            return false;
          }
        } else {
          return true;
        }
      }
    } else {
      this.ReturnUrl(state);
      return false;
    }
  }

  ReturnUrl(state: RouterStateSnapshot) {
    this.router.navigate(
      ['/user/login'],
      {
        queryParams: {
          fromUrl: state.url
        }
      }
    );
  }
}
