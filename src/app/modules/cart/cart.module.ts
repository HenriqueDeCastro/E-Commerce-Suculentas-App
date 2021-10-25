import { MatListModule } from '@angular/material/list';
import { AlertDangerModule } from './../../shared/components/alert-danger/alert-danger.module';
import { AlertWarningModule } from 'src/app/shared/components/alert-warning/alert-warning.module';
import { BtnBackModule } from 'src/app/shared/components/btn-back/btn-back.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { ProductsCartComponent } from './products-cart/products-cart.component';
import { SubtotalComponent } from './subtotal/subtotal.component';


@NgModule({
  declarations: [
    CartComponent,
    ProductsCartComponent,
    SubtotalComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule,
    BtnBackModule,
    AlertWarningModule,
    AlertDangerModule,
    MatListModule
  ]
})
export class CartModule { }
