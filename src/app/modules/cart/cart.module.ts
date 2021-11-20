import { AlertDangerModule } from './../../shared/components/alert-danger/alert-danger.module';
import { AlertWarningModule } from 'src/app/shared/components/alert-warning/alert-warning.module';
import { BtnBackModule } from 'src/app/shared/components/btn-back/btn-back.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { SubtotalComponent } from './subtotal/subtotal.component';
import { BtnEmptyCartComponent } from './btn-empty-cart/btn-empty-cart.component';
import { ProductsCartModule } from 'src/app/shared/components/products-cart/products-cart.module';


@NgModule({
  declarations: [
    CartComponent,
    SubtotalComponent,
    BtnEmptyCartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule,
    BtnBackModule,
    AlertWarningModule,
    AlertDangerModule,
    ProductsCartModule
  ]
})
export class CartModule { }
