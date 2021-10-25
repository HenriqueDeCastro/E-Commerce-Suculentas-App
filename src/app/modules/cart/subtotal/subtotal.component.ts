import { IProductCart } from 'src/app/shared/models/iproduct-cart';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtotal',
  templateUrl: './subtotal.component.html',
  styleUrls: ['./subtotal.component.scss']
})
export class SubtotalComponent implements OnInit {

  @Input() products!: IProductCart[];

  constructor() { }

  ngOnInit() {}

  calculateTotal(): number {
    let total: number = 0;
    this.products?.forEach((product: IProductCart) => {
      total = total + (product.price * product.quantityOrder);
    });

    return total;
  }

}
