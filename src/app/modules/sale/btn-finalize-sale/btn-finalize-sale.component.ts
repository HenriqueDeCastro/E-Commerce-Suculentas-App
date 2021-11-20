import { TextButton } from 'src/app/shared/enums/text-button';
import { MessagesSnackbar } from './../../../shared/enums/messages-snackbar';
import { environment } from './../../../../environments/environment';
import { SnackbarService } from './../../../core/services/snackbar/snackbar.service';
import { IProductType } from './../../../shared/models/iproduct-type';
import { SaleService } from './../../../core/services/sale/sale.service';
import { ICalculateShipping } from './../../../shared/models/icalculate-shipping';
import { TimeService } from './../../../core/services/time/time.service';
import { ISale } from './../../../shared/models/isale';
import { IOrder } from './../../../shared/models/iorder';
import { take, switchMap } from 'rxjs/operators';
import { IUser } from './../../../shared/models/iuser';
import { UserService } from './../../../core/services/user/user.service';
import { IAddress } from './../../../shared/models/iaddress';
import { IProductCart } from './../../../shared/models/iproduct-cart';
import { Component, Input, OnInit } from '@angular/core';
import { ProductTypeService } from 'src/app/core/services/product-type/product-type.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { QuantityCartService } from 'src/app/core/services/quantity-cart/quantity-cart.service';
import { IProduct } from 'src/app/shared/models/iproduct';

const URL_PAGSEGURO = environment.urlPagSeguro;

@Component({
  selector: 'app-btn-finalize-sale',
  templateUrl: './btn-finalize-sale.component.html',
  styleUrls: ['./btn-finalize-sale.component.scss']
})
export class BtnFinalizeSaleComponent implements OnInit {

  @Input() products!: IProductCart[];
  @Input() address!: IAddress;
  @Input() total!: number;
  @Input() shipping!: ICalculateShipping;
  @Input() type!: string;
  public txtBtn: string = TextButton.finish;
  public disableBtn: boolean = false;

  constructor(
    private userService: UserService,
    private timeService: TimeService,
    private saleService: SaleService,
    private productTypeService: ProductTypeService,
    private router: Router,
    private cartService: CartService,
    private quantityCartService: QuantityCartService,
    private snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
  }

  finalize(): void {
    let sale: ISale;

    this.userService.returnUser().pipe(
      take(1),
      switchMap((user: IUser) => {
        this.disableBtn = true;
        this.txtBtn = TextButton.registering;
        return this.saleService.post(this.createSale(user, this.createOrders()));
      })
    ).pipe(
      take(1),
      switchMap((s: ISale) => {
        sale = s;
        return this.productTypeService.getAllWithoutProducts();
      })
    ).subscribe((productTypes: IProductType[]) => {
        const type: IProductType = productTypes.filter(t => t.name == this.type.toLocaleUpperCase())[0];
        if(this.cartService.deleteCartByType(type)) {
          this.quantityCartService.deleteQuantityByProducts(this.cartService.returnCart());

        this.txtBtn = TextButton.redirecting;
        window.location.href = URL_PAGSEGURO + sale.trackingCode;
        this.router.navigate(['/sale/completed/' + sale.id]);
        this.snackbar.openSuccess(MessagesSnackbar.sale_successfully);
      }
    },
    error => {
      switch (error.status) {
        case 404: {
          const products: IProduct[] = error.error as IProduct[];
          this.unavailableProduct(products);
          this.snackbar.openError(MessagesSnackbar.unavailable_product_on_server);
          this.router.navigate(['/cart']);
          break;
        } case 503: {
          this.snackbar.openError(MessagesSnackbar.error_pagSeguro);
          this.router.navigate(['/cart']);
          break;
        } default: {
          this.snackbar.openError(MessagesSnackbar.server_error);
          break;
        }
      }

      this.disableBtn = false;
      this.txtBtn = TextButton.finish;
    });
  }

  createOrders(): IOrder[] {
    let orders: IOrder[] = [];
    this.products.forEach((product: IProductCart) => {
      const order: IOrder = {
        amount: product.quantityOrder,
        productId: product.id!,
        price: product.price
      }
      orders.push(order);
    });

    return orders;
  }

  createSale(user: IUser, orders: IOrder[]): ISale {
    const sale: ISale = {
      date: this.timeService.returnCurrentDateTime(),
      price: this.total,
      shipping: this.shipping?.price? true : false,
      shippingValue: Number(this.shipping?.price) ?? null,
      userId: user.id!,
      address: `R. ${this.address.road}, ${this.address.number} - ${this.address.district}, ${this.address.city} - ${this.address.state}, ${this.address.cep}`,
      orders: orders
    }

    return sale;
  }

  unavailableProduct(productsUnavailables: IProduct[]): void {
    const productsCart: IProductCart[] = this.cartService.returnCart();

    productsCart.forEach((productCart: IProductCart) => {
      productsUnavailables.forEach((productsUnavailable: IProduct) => {
        if(productCart.id == productsUnavailable.id)
          productCart.unavailable = true;
      })
    });

    this.cartService.saveCart(productsCart);
  }
}
