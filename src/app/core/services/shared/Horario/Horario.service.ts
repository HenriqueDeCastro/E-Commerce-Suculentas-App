import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  constructor() { }


  RetornaDataHoraAtual(): string {
    const dNow = new Date();
    const localdate = dNow.getDate() + '/' + (dNow.getMonth() + 1) + '/' + dNow.getFullYear()
                                  + ' ' + dNow.getHours() + ':' + dNow.getMinutes() + ':' + dNow.getSeconds();
    return localdate;
  }

  RetornaDataAtualParaNome(): string {
    const dNow = new Date();
    const localdate = dNow.getDate() + '_' + (dNow.getMonth() + 1) + '_' + dNow.getFullYear() + '_' +
      'T_' + dNow.getHours() + '_' + dNow.getMinutes() + '_' + dNow.getSeconds();
    return localdate;
  }

  RetornarDiaAtual(): number {
    const dNow = new Date();
    const localdate = dNow.getDate();
    return localdate;
  }

  RetornaDiaAnterior(): number {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return d.getDate();
  }

  RetornaMesAtual(): number {
    const dNow = new Date();
    const localdate = dNow.getMonth() + 1;
    return localdate;
  }

  RetornarAnoAtual(): number {
    const dNow = new Date();
    const localdate = dNow.getFullYear();
    return localdate;
  }

}
