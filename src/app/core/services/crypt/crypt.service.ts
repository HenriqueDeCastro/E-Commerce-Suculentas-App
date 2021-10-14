import { Injectable } from '@angular/core';

const KEY = 'CRYPT_KEY_SUCULENTAS';
declare var require: any

@Injectable({
  providedIn: 'root'
})
export class CryptService {

  public CryptoJS = require("crypto-js");

  constructor() { }

  cryptText(texto: string | number): string {
    return this.CryptoJS.AES.encrypt(texto, KEY).toString();
  }

  descryptText(textoCrypt: string): string {
    return this.CryptoJS.AES.decrypt(textoCrypt, KEY).toString(this.CryptoJS.enc.Utf8);
  }

  cryptObject(objeto: any[]): string {
    return this.CryptoJS.AES.encrypt(JSON.stringify(objeto), KEY).toString();
  }

  descryptObject(objetoCrytp: string): any[] {
    const bytes = this.CryptoJS.AES.decrypt(objetoCrytp, KEY);
    return JSON.parse(bytes.toString(this.CryptoJS.enc.Utf8) || '[]');
  }
}
