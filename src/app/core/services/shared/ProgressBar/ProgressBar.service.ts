import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressBarService {

  private Condição: boolean = false;

  constructor() { }

  Mostrar() {
    this.Condição = !this.Condição;
  }
}
