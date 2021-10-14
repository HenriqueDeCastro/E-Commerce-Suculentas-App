import { SharedModule } from './../../shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnCartComponent } from './btn-cart.component';

@NgModule({
  declarations: [
    BtnCartComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    BtnCartComponent
  ]
})
export class BtnCartModule { }
