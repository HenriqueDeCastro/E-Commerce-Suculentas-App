import { IProductType } from './../../models/iproduct-type';
import { ICategory } from 'src/app/shared/models/icategory';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.scss']
})
export class HomeProductsComponent implements OnInit {

  @Input() categorys!: ICategory[];
  @Input() productTypes!: IProductType[];
  @Input() company: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
