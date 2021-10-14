// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// angular material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// components
import { BtnRouterBackComponent } from './btn-router-back.component';


@NgModule({
  declarations: [
    BtnRouterBackComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    BtnRouterBackComponent
  ]
})
export class BtnRouterBackModule { }
