import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnResponsiveComponent } from './btn-responsive.component';



@NgModule({
  declarations: [
    BtnResponsiveComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    BtnResponsiveComponent
  ]
})
export class BtnResponsiveModule { }
