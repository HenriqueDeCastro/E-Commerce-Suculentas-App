import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-geralProdutos',
  templateUrl: './geralProdutos.component.html',
  styleUrls: ['./geralProdutos.component.scss']
})
export class GeralProdutosComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
