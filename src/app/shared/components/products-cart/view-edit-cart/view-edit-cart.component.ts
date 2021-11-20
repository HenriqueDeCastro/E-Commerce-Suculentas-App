import { QuantityCartService } from '../../../../core/services/quantity-cart/quantity-cart.service';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { IProductCart } from 'src/app/shared/models/iproduct-cart';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductTypes } from 'src/app/shared/enums/product-types';

@Component({
  selector: 'app-view-edit-cart',
  templateUrl: './view-edit-cart.component.html',
  styleUrls: ['./view-edit-cart.component.scss']
})
export class ViewEditCartComponent implements OnInit {

  @Input() product!: IProductCart;
  @Output() edit = new EventEmitter<boolean>();
  public quantity!: number;
  public maximumQuantity!: number;
  public productTypes = ProductTypes;

  constructor(
    private cartService: CartService,
    private quantityCartService: QuantityCartService
  ) { }

  ngOnInit(): void {
    this.quantity = this.product.quantityOrder;
    this.maximumQuantityProductAvailable();
  }


  maximumQuantityProductAvailable(): void {
    if (this.product.productTypeName == this.productTypes.order) {
      this.maximumQuantity = this.product.maximumQuantity!;
    } else {
      this.maximumQuantity = this.product.inventory!;
    }
  }

  receiveQuantitySelect(selected: number): void {
    this.quantity = selected;
  }

  removeItem(): void {
    if(this.cartService.deleteCartByProduct(this.product)) {
      this.quantityCartService.deleteQuantityByProducts(this.cartService.returnCart());
      this.edit.emit(true);
    } else {
      this.edit.emit(false);
    }
  }

  editItem(): void {
    if(this.cartService.editCart(this.product, this.quantity)) {
      this.quantityCartService.deleteQuantityByProducts(this.cartService.returnCart());
      this.edit.emit(true);
    } else {
      this.edit.emit(false);
    }
  }
}
