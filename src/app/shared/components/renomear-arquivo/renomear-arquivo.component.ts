import { Component, Injectable } from '@angular/core';
import { HorarioComponent } from '../horario/horario.component';

@Injectable({
  providedIn: 'root'
})
export class RenomearArquivoComponent {

  constructor(private horario: HorarioComponent) {}

  RenomearArquivo(file, nome): any {
    const extension = this.ext(file[0].name);
    const data = this.horario.RetornaDataAtualParaNome();
    const nameFile = `${nome}_${data}.${extension}`;
    Object.defineProperty(file[0], 'name', {
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
