import { IProductCart } from 'src/app/shared/models/iproduct-cart';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductTypes } from 'src/app/shared/enums/product-types';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public unavailable!: boolean;
  public productsOrder!: IProductCart[];
  public productsInventory! : IProductCart[];
  public productsTypes = ProductTypes;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.receiveProducts();
    this.checkUnavailableProducts();
  }

  receiveProducts(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.productsOrder = this.activatedRoute.snapshot.data['productsOrder'];
      this.productsInventory = this.activatedRoute.snapshot.data['productsInventory'];
    })
  }

  checkUnavailableProducts() {
    const productsOrderUnavailable = this.productsOrder.filter(p => p.unavailable == true);
    const productsInventoryUnavailable = this.productsInventory.filter(p => p.unavailable == true);

    if(productsOrderUnavailable.length > 0 || productsInventoryUnavailable.length > 0) {
      this.unavailable = true;
    } else {
      this.unavailable = false;
    }
  }

  receiveActionCart(action: boolean) {
    if(action) {
      this.router.navigate([]).finally(() => {
        this.receiveProducts();
      })
    }
  }
}
