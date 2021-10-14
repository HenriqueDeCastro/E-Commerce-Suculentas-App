import { AlertWarningModule } from './../alert-warning/alert-warning.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertCityOrderComponent } from './alert-city-order.component';



@NgModule({
  declarations: [
    AlertCityOrderComponent
  ],
  imports: [
    CommonModule,
    AlertWarningModule
  ],
  exports: [
    AlertCityOrderComponent
  ]
})
export class AlertCityOrderModule { }
