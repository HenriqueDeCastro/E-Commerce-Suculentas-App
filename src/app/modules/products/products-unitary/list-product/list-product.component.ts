import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { VerifyProductTypeService } from 'src/app/core/services/verify-product-type/verify-product-type.service';
import { ProductTypes } from 'src/app/shared/enums/product-types';
import { IProduct } from 'src/app/shared/models/iproduct';
import { IProductCart } from 'src/app/shared/models/iproduct-cart';
import { IProductType } from 'src/app/shared/models/iproduct-type';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  @Input() product!: IProduct;
  @Input() productTypes!: IProductType[];
  @Input() mobile!: boolean;
  @Input() quantity: number = 1;
  @Input() maximumQuantity!: number;
  @Input() type!: IProductType;
  public types = ProductTypes;

  constructor() { }

  ngOnInit(): void {}

  receiveQuantitySelect(selected: number): void {
    this.quantity = selected;
  }
}
