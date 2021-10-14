import { SharedModule } from './../../shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnQuantityComponent } from './btn-quantity.component';



@NgModule({
  declarations: [
    BtnQuantityComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    BtnQuantityComponent
  ]
})
export class BtnQuantityModule { }
