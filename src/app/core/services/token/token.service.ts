import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';

const KEY = 'token';
const PATH = '/';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private coockieService: CookieService) {}

  returnToken(): string {
    return this.coockieService.get(KEY);
  }

  saveToken(token: string): void {
    this.coockieService.set(KEY, token, { expires: 1, path: PATH});
  }

  deleteToken(): void {
    this.coockieService.delete(KEY, PATH);
  }

  hasToken(): boolean {
    return !!this.returnToken();
  }
}
