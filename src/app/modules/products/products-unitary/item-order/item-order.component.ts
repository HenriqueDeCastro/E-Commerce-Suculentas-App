import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/models/iproduct';

@Component({
  selector: 'app-item-order',
  templateUrl: './item-order.component.html',
  styleUrls: ['./item-order.component.scss']
})
export class ItemOrderComponent implements OnInit {

  @Input() product!: IProduct;

  constructor() { }

  ngOnInit(): void {
  }

}
