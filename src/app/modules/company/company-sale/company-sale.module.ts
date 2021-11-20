import { SaleStatusModule } from './../../../shared/components/sale-status/sale-status.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanySaleRoutingModule } from './company-sale-routing.module';
import { CompanySaleStatusComponent } from './company-sale-status/company-sale-status.component';
import { CompanySaleDetailsComponent } from './company-sale-details/company-sale-details.component';
import { SaleDetailsModule } from 'src/app/shared/components/sale-details/sale-details.module';


@NgModule({
  declarations: [
    CompanySaleStatusComponent,
    CompanySaleDetailsComponent
  ],
  imports: [
    CommonModule,
    CompanySaleRoutingModule,
    SaleDetailsModule,
    SaleStatusModule
  ]
})
export class CompanySaleModule { }
