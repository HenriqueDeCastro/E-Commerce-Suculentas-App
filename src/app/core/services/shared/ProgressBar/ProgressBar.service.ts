import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {

  private Condicao: boolean = false;

  constructor() { }

  Mostrar() {
    this.Condicao = !this.Condicao;
  }

  RetornarValor(): boolean {
    return this.Condicao;
  }
}
