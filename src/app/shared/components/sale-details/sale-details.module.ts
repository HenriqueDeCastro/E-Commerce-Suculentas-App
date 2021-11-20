import { MaskModule } from './../mask/mask.module';
import { BtnBackModule } from './../btn-back/btn-back.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleDetailsComponent } from './sale-details.component';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from '../../shared.module';
import { ViewProductComponent } from './view-product/view-product.component';
import { ListSaleDetailValuesComponent } from './list-sale-detail-values/list-sale-detail-values.component';
import { ListSaleDetailShippingComponent } from './list-sale-detail-shipping/list-sale-detail-shipping.component';
import { ListSaleDetailClientComponent } from './list-sale-detail-client/list-sale-detail-client.component';

@NgModule({
  declarations: [
    SaleDetailsComponent,
    ViewProductComponent,
    ListSaleDetailValuesComponent,
    ListSaleDetailShippingComponent,
    ListSaleDetailClientComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatListModule,
    BtnBackModule,
    MaskModule
  ],
  exports: [
    SaleDetailsComponent
  ]
})
export class SaleDetailsModule { }
