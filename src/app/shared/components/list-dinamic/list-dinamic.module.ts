import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDinamicComponent } from './list-dinamic.component';



@NgModule({
  declarations: [
    ListDinamicComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule
  ],
  exports: [
    ListDinamicComponent
  ]
})
export class ListDinamicModule { }
