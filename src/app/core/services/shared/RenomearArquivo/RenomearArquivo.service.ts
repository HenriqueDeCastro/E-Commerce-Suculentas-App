import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RenomearArquivoService {

  constructor() {}

  RenomearArquivo(file, nome): any {
    const extension = this.ext(file.name);
    const nameFile = `${nome}.${extension}`;
    Object.defineProperty(file, 'name', {
      writable: true,
      value: nameFile
    });
    return file;
  }

  ext(path): any {
    const idx = (~-path.lastIndexOf('.') >>> 0) + 2;
    return path.substr((path.lastIndexOf('/') - idx > -3 ? -1 >>> 0 : idx));
  }

}
