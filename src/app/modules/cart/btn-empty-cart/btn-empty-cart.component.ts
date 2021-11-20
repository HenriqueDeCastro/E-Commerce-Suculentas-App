import { QuantityCartService } from './../../../core/services/quantity-cart/quantity-cart.service';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';
import { IProductType } from 'src/app/shared/models/iproduct-type';
import { ProductTypeService } from 'src/app/core/services/product-type/product-type.service';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductTypes } from 'src/app/shared/enums/product-types';
import { Router } from '@angular/router';
import { MessagesSnackbar } from 'src/app/shared/enums/messages-snackbar';

@Component({
  selector: 'app-btn-empty-cart',
  templateUrl: './btn-empty-cart.component.html',
  styleUrls: ['./btn-empty-cart.component.scss']
})
export class BtnEmptyCartComponent implements OnInit {

  @Input() type!: string;
  @Output() emptied = new EventEmitter<boolean>();
  public productsTypes = ProductTypes

  constructor(
    private router: Router,
    private cartService: CartService,
    private quantityCartService: QuantityCartService,
    private productTypeService: ProductTypeService,
    private snackbar: SnackbarService
  ) { }

  ngOnInit(): void {}

  cleanCart(): void {
    this.productTypeService.getAllWithoutProducts().subscribe((types: IProductType[]) => {
      const type: IProductType = types.filter(t => t.name == this.type)[0];
      if(this.cartService.deleteCartByType(type)) {
        this.quantityCartService.deleteQuantityByProducts(this.cartService.returnCart())
        this.emptied.emit(true);
      }
    },
    (error) => {
      this.snackbar.openError(MessagesSnackbar.server_error);
    });
  }

  finish() {
    this.router.navigate(['/sale/finalize/', this.type.toLocaleLowerCase()]);
  }
}
