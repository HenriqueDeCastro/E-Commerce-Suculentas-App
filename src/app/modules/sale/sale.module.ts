import { AlertWarningModule } from './../../shared/components/alert-warning/alert-warning.module';
import { MaskModule } from './../../shared/components/mask/mask.module';
import { AlertCityOrderModule } from 'src/app/shared/components/alert-city-order/alert-city-order.module';
import { ProductsCartModule } from 'src/app/shared/components/products-cart/products-cart.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleRoutingModule } from './sale-routing.module';
import { FinalizeSaleComponent } from './finalize-sale/finalize-sale.component';
import { SelectAddressComponent } from './select-address/select-address.component';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { ShippingValueComponent } from './shipping-value/shipping-value.component';
import { TableTotalComponent } from './table-total/table-total.component';
import { MatTableModule } from '@angular/material/table';
import { BtnFinalizeSaleComponent } from './btn-finalize-sale/btn-finalize-sale.component';
import { CompletedComponent } from './completed/completed.component';

@NgModule({
  declarations: [
    FinalizeSaleComponent,
    SelectAddressComponent,
    ShippingValueComponent,
    TableTotalComponent,
    BtnFinalizeSaleComponent,
    CompletedComponent,
  ],
  imports: [
    CommonModule,
    SaleRoutingModule,
    SharedModule,
    ProductsCartModule,
    AlertCityOrderModule,
    MatRadioModule,
    FormsModule,
    MaskModule,
    AlertWarningModule,
    MatTableModule
  ]
})
export class SaleModule { }
