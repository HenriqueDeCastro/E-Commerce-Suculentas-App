import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { IProductType } from '../../models/iproduct-type';

@Component({
  selector: 'app-card-list-products',
  templateUrl: './card-list-products.component.html',
  styleUrls: ['./card-list-products.component.scss']
})
export class CardListProductsComponent implements OnInit {

  @Input() products!: IProduct[] | undefined;
  @Input() company!: boolean;
  @Input() productTypes!: IProductType[];

  constructor() { }

  ngOnInit(): void {
  }

}
