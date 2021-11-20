import { IProductCart } from './../../models/iproduct-cart';
import { MessagesSnackbar } from 'src/app/shared/enums/messages-snackbar';
import { QuantityCartService } from './../../../core/services/quantity-cart/quantity-cart.service';
import { CartService } from './../../../core/services/cart/cart.service';
import { Component, Input, OnInit } from '@angular/core';
import { SnackbarService } from 'src/app/core/services/snackbar/snackbar.service';
import { IProduct } from '../../models/iproduct';
import { ProductTypes } from '../../enums/product-types';
import { IProductType } from '../../models/iproduct-type';
import { VerifyProductTypeService } from 'src/app/core/services/verify-product-type/verify-product-type.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-btn-cart',
  templateUrl: './btn-cart.component.html',
  styleUrls: ['./btn-cart.component.scss']
})
export class BtnCartComponent implements OnInit {

  @Input() typeBtn: string = 'solid';
  @Input() quantity!: number;
  @Input() back: boolean = false;
  @Input() product!: IProduct;
  @Input() productTypes!: IProductType[];
  public disableBtn!: boolean;
  public types = ProductTypes;
  public type!: IProductType;
  private products!: IProductCart[];
  private quantityCart!: number;

  constructor(
    private snackbar: SnackbarService,
    private location: Location,
    private cartService: CartService,
    private quantityCartService: QuantityCartService,
    private verifyProductTypeService: VerifyProductTypeService
  ) { }

  ngOnInit(): void {
    this.type = this.verifyProductTypeService.objectById(this.productTypes, this.product.productTypeId ?? 0);
    this.verifyTotalProducts();
  }

  verifyTotalProducts(): void {
    this.products = this.cartService.returnCart();
    if(this.products.length > 0) {

      const product: IProductCart = this.filterProducts();

      if(product) {
        this.disableBtn = this.validQuantityAvailable(product);
      }
    }

    if(!this.product.active) {
      this.disableBtn = true;
    }
  }

  placeCart(): void {
    const maximumValue = this.type.name == this.types.order? this.product.maximumQuantity : this.product.inventory;

    if(maximumValue! > 0) {
      this.products = this.cartService.returnCart();

      if(this.quantityCartService.hasQuantity()) {
        this.quantityCart = this.quantityCartService.returnQuantity();
      }

      if (this.products?.length == 0) {
        this.insertCoockieFirstTime();
      } else {
        this.insertCookie();
      }
    }
  }

  insertCoockieFirstTime(): void{
    this.cartService.saveCart([this.convertProductinCar(this.product)]);
    this.quantityCartService.saveQuantity(this.quantity);
    this.addSuccess();
  }

  insertCookie(): void {
    const productCart: IProductCart = this.filterProducts();
    if (productCart) {

      if (!this.validQuantityAvailable(productCart)) {
        this.products.forEach((product: IProductCart, index: number) => {
          if (product.id === this.product.id) {
            this.products.splice(index, 1);
          }
        });

        this.quantityCart = this.quantityCart + this.quantity;
        this.quantityCartService.saveQuantity(this.quantityCart);

        productCart.quantityOrder = productCart.quantityOrder + this.quantity;
        this.products.push(productCart);
        this.cartService.saveCart(this.products);

        this.addSuccess();
      } else {
        this.snackbar.openError(MessagesSnackbar.maximum_stock_error);
      }
    } else {
      this.products.push(this.convertProductinCar(this.product));
      this.cartService.saveCart(this.products)

      this.quantityCart = this.quantityCart + this.quantity;
      this.quantityCartService.saveQuantity(this.quantityCart);

      this.addSuccess();
    }
  }

  filterProducts(): IProductCart {
    return this.products.filter(p => p.id == this.product.id)[0];
  }

  validQuantityAvailable(product: IProductCart): boolean {
    const maximumValue = this.type.name == this.types.order? this.product.maximumQuantity : this.product.inventory;
    return maximumValue! < (product.quantityOrder + this.quantity)? true : false
  }

  addSuccess(): void {
    this.snackbar.openSuccess(MessagesSnackbar.product_added_cart);
    this.verifyTotalProducts();
    this.backPage();
  }

  convertProductinCar(product: IProduct): IProductCart {
    let productCart: IProductCart;

    return productCart = {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
      inventory: product.inventory,
      active: product.active,
      productTypeId: product.productTypeId,
      productTypeName: this.type.name,
      categoryId: product.categoryId,
      maximumQuantity: product.maximumQuantity,
      quantityOrder: this.quantity,
    };
  }

  backPage(): void {
    if (this.back)
    this.location.back();
  }
}
