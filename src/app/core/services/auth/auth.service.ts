import { IUserReset } from './../../../shared/models/iuser-reset';
import { IUserForgotPassword } from './../../../shared/models/iuser-forgot-password';
import { IUserToken } from '../../../shared/models/iuser-token';
import { IUser } from '../../../shared/models/iuser';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IUserLogin } from 'src/app/shared/models/iuser-login';
import { environment } from 'src/environments/environment';
import { UserService } from '../user/user.service';

const API = environment.urlApi;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlEndPointApi = `${API}/user`;

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  getUserByEmail(emailUser: string): Observable<IUser> {
    return this.http.get<IUser>(`${this.urlEndPointApi}/getByEmail/${emailUser}`);
  }

  register(user: IUser): Observable<IUserToken> {
    return this.http.post<IUserToken>(`${this.urlEndPointApi}/register`, user).pipe(
      map((user: IUserToken) => {
        this.userService.saveToken(user.token);
        return user;
      })
    );
  }

  login(userLogin: IUserLogin): Observable<IUserToken> {
    return this.http.post<IUserToken>(`${this.urlEndPointApi}/login`, userLogin).pipe(
      map((user: IUserToken) => {
        this.userService.saveToken(user.token);
        return user;
      })
    );
  }

  forgotPassword(forgot: IUserForgotPassword): Observable<any> {
    return this.http.post<any>(`${this.urlEndPointApi}/forgotPassword`, forgot);
  }

  resetPassword(reset: IUserReset): Observable<any> {
    return this.http.post<any>(`${this.urlEndPointApi}/resetPassword`, reset);
  }

  put(user: IUser): Observable<IUserToken> {
    return this.http.put<IUserToken>(`${this.urlEndPointApi}/updateUser`, user).pipe(
      map((user: IUserToken) => {
        this.userService.saveToken(user.token);
        return user;
      }),
      take(1)
    );
  }
}
