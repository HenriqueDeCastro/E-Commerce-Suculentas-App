import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (localStorage.getItem(environment.VariavelToken) !== null && req.url.includes(environment.UrlApi)) {
      const cloneReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${localStorage.getItem(environment.VariavelToken)}`)
      });
      return next.handle(cloneReq).pipe(
        tap(
          succ => { },
          err => {
            if (err.status === 401) {
              localStorage.removeItem(environment.VariavelToken);
              this.router.navigate(['/user/login']);
            }
          }
        )
      );
    } else {
      return next.handle(req.clone());
    }
  }
}
