import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnBackComponent } from './btn-back.component';



@NgModule({
  declarations: [
    BtnBackComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    BtnBackComponent
  ]
})
export class BtnBackModule { }
