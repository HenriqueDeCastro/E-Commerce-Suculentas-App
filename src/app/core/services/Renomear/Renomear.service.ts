import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RenomearService {

  RenomearArquivo(file, nome): any {
    const extension = this.ext(file[0].name);
    const data = this.RetornaDataParaNome();
    const nameFile = `${nome}_${data}.${extension}`;
    Object.defineProperty(file[0], 'name', {
      writable: true,
      value: nameFile
    });
    return file;
  }

  RetornaDataParaNome(): any {
    const dNow = new Date();
    const localdate = dNow.getDate() + '_' + (dNow.getMonth() + 1) + '_' + dNow.getFullYear() + '_' +
      'T_' + dNow.getHours() + '_' + dNow.getMinutes() + '_' + dNow.getSeconds();
    return localdate;
  }

  ext(path): any {
    const idx = (~-path.lastIndexOf('.') >>> 0) + 2;
    return path.substr((path.lastIndexOf('/') - idx > -3 ? -1 >>> 0 : idx));
  }
}
