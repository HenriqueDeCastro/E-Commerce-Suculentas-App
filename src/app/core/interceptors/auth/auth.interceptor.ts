import { TokenService } from './../../services/token/token.service';
import { LoadingService } from './../../services/loading/loading.service';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private userService: UserService,
    private tokenService: TokenService,
    private router: Router,
    private loadingService: LoadingService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingService.setLoading(true, request.url);

    if(this.userService.loggedIn() && request.url.includes(environment.urlApi)) {
      const token = this.tokenService.returnToken();
      const headers = new HttpHeaders().append('Authorization', `Bearer ${token}`);
      request = request.clone({headers: headers});
    }

    return next.handle(request)
    .pipe(catchError((err) => {
      this.loadingService.setLoading(false, request.url);
      if(err.status === 401) {
        this.userService.logout();
        this.router.navigate(['user/login'])
      }
      return throwError(err);
    }))
    .pipe(map((evt: any) => {
      if (evt instanceof HttpResponse) {
        this.loadingService.setLoading(false, request.url);
      }
      return evt;
    }))
  }
}
