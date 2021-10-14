import { RouterModule } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyHomeComponent } from './company-home/company-home.component';

@NgModule({
  declarations: [

    CompanyHomeComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    SharedModule,
    MatListModule,
    MatBadgeModule,
    RouterModule
  ]
})
export class CompanyModule { }
