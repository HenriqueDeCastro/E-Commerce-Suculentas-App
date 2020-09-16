import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-voltar',
  templateUrl: './voltar.component.html',
  styleUrls: ['./voltar.component.scss']
})
export class VoltarComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {}

  Voltar(): void {
    this.location.back();
  }
}
