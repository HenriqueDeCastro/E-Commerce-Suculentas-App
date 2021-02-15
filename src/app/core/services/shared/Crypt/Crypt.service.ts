import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CryptService {

  constructor() { }

  cryptText(texto: string): string {
    return CryptoJS.AES.encrypt(texto, environment.ChaveCript).toString();
  }

  descryptText(textoCrypt: string): string {
    return CryptoJS.AES.decrypt(textoCrypt, environment.ChaveCript).toString(CryptoJS.enc.Utf8);
  }

  cryptObject(objeto: any[]): string {
    return CryptoJS.AES.encrypt(JSON.stringify(objeto), environment.ChaveCript).toString();
  }

  descryptObject(objetoCrytp: string): any[] {
    const bytes  = CryptoJS.AES.decrypt(objetoCrytp, environment.ChaveCript);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }
}
