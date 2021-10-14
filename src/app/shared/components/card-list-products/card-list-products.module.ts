import { BtnCartModule } from './../btn-cart/btn-cart.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListProductsComponent } from './card-list-products.component';
import { CardProductComponent } from './card-product/card-product.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    CardListProductsComponent,
    CardProductComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    BtnCartModule
  ],
  exports: [
    CardListProductsComponent
  ]
})
export class CardListProductsModule { }
