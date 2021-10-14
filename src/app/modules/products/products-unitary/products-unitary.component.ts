import { IProductCart } from 'src/app/shared/models/iproduct-cart';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { DeviceService } from './../../../core/services/device/device.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/models/iproduct';
import { IProductType } from 'src/app/shared/models/iproduct-type';
import { environment } from 'src/environments/environment';
import { VerifyProductTypeService } from 'src/app/core/services/verify-product-type/verify-product-type.service';
import { ProductTypes } from 'src/app/shared/enums/product-types';

const API = environment.urlApi;

@Component({
  selector: 'app-products-unitary',
  templateUrl: './products-unitary.component.html',
  styleUrls: ['./products-unitary.component.scss']
})
export class ProductsUnitaryComponent implements OnInit {

  public product!: IProduct;
  public productTypes!: IProductType[];
  public productCart!: IProductCart;
  public hasCart!: boolean;
  public mobile!: boolean;
  public quantity: number = 1;
  public maximumQuantity!: number;
  public type!: IProductType;
  public types = ProductTypes;
  public urlImage: string = `${API}/resources/Normal/`;

  constructor(
    private activatedRoute: ActivatedRoute,
    private deviceService: DeviceService,
    private cartService: CartService,
    private verifyProductTypeService: VerifyProductTypeService
  ) { }

  ngOnInit(): void {
    this.mobile = this.deviceService.itsMobile();

    this.activatedRoute.params.subscribe((params) => {
      this.product = this.activatedRoute.snapshot.data['product'];
      this.productTypes = this.activatedRoute.snapshot.data['productsType'];
    });

    this.type = this.verifyProductTypeService.objectById(this.productTypes, this.product.productTypeId ?? 0);
    this.checkProductCart();
  }

  checkProductCart(): void {
    const productsCookie = this.cartService.returnCart();
    if(productsCookie.length > 0) {
      this.productCart = productsCookie.filter(p => p.id == this.product.id)[0];

      if(this.productCart) {
        this.quantityMaximumLessQuantityCart();
      } else {
        this.maximumQuantityProductAvailable();
      }

    } else {
      this.maximumQuantityProductAvailable();
    }
  }

  quantityMaximumLessQuantityCart(): void {
    if(this.type.name == this.types.order) {
      this.maximumQuantity = this.product.maximumQuantity! - this.productCart.quantityOrder;
    } else {
      this.maximumQuantity = this.product.inventory! - this.productCart.quantityOrder;
    }
  }

  maximumQuantityProductAvailable(): void {
    if(this.type.name == this.types.order) {
      this.maximumQuantity = this.product.maximumQuantity!;
    } else {
      this.maximumQuantity = this.product.inventory!;
    }
  }
}
