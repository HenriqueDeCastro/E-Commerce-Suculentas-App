import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-voltar',
  templateUrl: './voltar.component.html',
  styleUrls: ['./voltar.component.scss']
})
export class VoltarComponent implements OnInit {

  private returnUrl: string;

  constructor(private router: Router,
              private activetedRoute: ActivatedRoute,
              private location: Location) {}

  ngOnInit(): void {}

  Voltar(): void {
    this.location.back();
  }

}
