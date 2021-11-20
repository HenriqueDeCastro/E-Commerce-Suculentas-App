import { SaleDetailsModule } from './../../../shared/components/sale-details/sale-details.module';
import { SaleStatusModule } from './../../../shared/components/sale-status/sale-status.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileSaleRoutingModule } from './profile-sale-routing.module';
import { ProfileSaleStatusComponent } from './profile-sale-status/profile-sale-status.component';
import { ProfileSaleDetailsComponent } from './profile-sale-details/profile-sale-details.component';

@NgModule({
  declarations: [
    ProfileSaleStatusComponent,
    ProfileSaleDetailsComponent
  ],
  imports: [
    CommonModule,
    ProfileSaleRoutingModule,
    SaleStatusModule,
    SaleDetailsModule
  ]
})
export class ProfileSaleModule { }
