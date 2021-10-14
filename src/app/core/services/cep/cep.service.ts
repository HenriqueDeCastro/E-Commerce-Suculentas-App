import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

const KEY = 'cep';
const PATH = '/';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private coockieService: CookieService) {}

  returnCEP(): string {
    return this.coockieService.get(KEY);
  }

  saveCEP(token: string): void {
    this.coockieService.set(KEY, token, { expires: 1, path: PATH});
  }

  deleteCEP(): void {
    this.coockieService.delete(KEY, PATH);
  }

  hasCEP(): boolean {
    return !!this.returnCEP();
  }
}
