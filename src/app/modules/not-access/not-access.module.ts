import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotAccessRoutingModule } from './not-access-routing.module';
import { NotAccessComponent } from './not-access.component';


@NgModule({
  declarations: [
    NotAccessComponent
  ],
  imports: [
    CommonModule,
    NotAccessRoutingModule,
    SharedModule
  ]
})
export class NotAccessModule { }
