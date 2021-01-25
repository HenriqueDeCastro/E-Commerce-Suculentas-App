import { Injectable } from '@angular/core';
import { HorarioService } from '../Horario/Horario.service';

@Injectable({
  providedIn: 'root'
})
export class RenomearArquivoService {

  constructor(private horario: HorarioService) {}

  RenomearArquivo(file, nome): any {
    const extension = this.ext(file.name);
    const data = this.horario.RetornaDataAtualParaNome();
    const nameFile = `${nome}_${data}.${extension}`;
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
