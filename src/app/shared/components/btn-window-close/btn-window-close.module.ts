// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// angular material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// components
import { BtnWindowCloseComponent } from './btn-window-close.component';


@NgModule({
  declarations: [
    BtnWindowCloseComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    BtnWindowCloseComponent
  ]
})
export class BtnWindowCloseModule { }
