import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from 'src/app/shared/models/iuser';
import { TokenService } from '../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usuarioSubject = new BehaviorSubject<IUser>({});
  private jwtHelpers = new JwtHelperService();

  constructor(private tokenService: TokenService) {
    if(this.tokenService.hasToken()) {
      this.insertUser();
    }
   }

  private insertUser() {
    const user = this.decodesJWT();
    this.usuarioSubject.next(user);
  }

  private decodesJWT(): IUser {
    const token = this.tokenService.returnToken();
    return this.jwtHelpers.decodeToken(token) as IUser;
  }

  returnUser(): Observable<IUser> {
    return this.usuarioSubject.asObservable();
  }

  saveToken(token: string): void {
    this.tokenService.saveToken(token);
    this.insertUser();
  }

  logout(): void {
    this.tokenService.deleteToken();
    this.usuarioSubject.next({});
  }

  loggedIn() {
    return this.tokenService.hasToken();
  }

  expiredToken() {
    const token = this.tokenService.returnToken();
    return this.jwtHelpers.isTokenExpired(token);
  }

  verifyAcessRole(roleUser: string[]): boolean {
    const user = this.decodesJWT();

    if(user.role) {
      return roleUser.some((role: string): boolean => {
        if(user.role?.indexOf(role) != -1) {
          return true;
        }
        return false;
      });
    }
    else {
      return false
    }
  }
}
