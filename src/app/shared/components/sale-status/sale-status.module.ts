import { BtnBackModule } from './../btn-back/btn-back.module';
import { ListDinamicModule } from './../list-dinamic/list-dinamic.module';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from './../../shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleStatusComponent } from './sale-status.component';

@NgModule({
  declarations: [
    SaleStatusComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatListModule,
    ListDinamicModule,
    BtnBackModule
  ],
  exports: [
    SaleStatusComponent
  ]
})
export class SaleStatusModule { }
