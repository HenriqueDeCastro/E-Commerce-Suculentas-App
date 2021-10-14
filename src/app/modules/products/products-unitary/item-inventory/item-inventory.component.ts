import { ProductTypes } from './../../../../shared/enums/product-types';
import { IProduct } from './../../../../shared/models/iproduct';
import { Component, Input, OnInit } from '@angular/core';
import { IProductType } from 'src/app/shared/models/iproduct-type';

@Component({
  selector: 'app-item-inventory',
  templateUrl: './item-inventory.component.html',
  styleUrls: ['./item-inventory.component.scss']
})
export class ItemInventoryComponent implements OnInit {

  @Input() product!: IProduct;
  @Input() maximumQuantity!: number;

  constructor() { }

  ngOnInit(): void {}

}
