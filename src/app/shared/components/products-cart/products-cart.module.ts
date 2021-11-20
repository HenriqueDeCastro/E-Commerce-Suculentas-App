import { BtnQuantityModule } from 'src/app/shared/components/btn-quantity/btn-quantity.module';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from './../../shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsCartComponent } from './products-cart.component';
import { BottomEditCartComponent } from './bottom-edit-cart/bottom-edit-cart.component';
import { DialogEditCartComponent } from './dialog-edit-cart/dialog-edit-cart.component';
import { ViewEditCartComponent } from './view-edit-cart/view-edit-cart.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    ProductsCartComponent,
    BottomEditCartComponent,
    DialogEditCartComponent,
    ViewEditCartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDialogModule,
    MatListModule,
    BtnQuantityModule
  ],
  exports: [
    ProductsCartComponent
  ]
})
export class ProductsCartModule { }
