import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleButtonAddComponent } from './title-button-add.component';



@NgModule({
  declarations: [
    TitleButtonAddComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule
  ],
  exports: [
    TitleButtonAddComponent
  ]
})
export class TitleButtonAddModule { }
