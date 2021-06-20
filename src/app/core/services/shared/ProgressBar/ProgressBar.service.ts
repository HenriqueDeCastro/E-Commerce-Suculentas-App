import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {

  private Condicao: boolean = false;

  constructor() { }

  Mostrar(condicao: boolean) {
    this.Condicao = condicao;
  }

  RetornarValor(): boolean {
    return this.Condicao;
  }
}
