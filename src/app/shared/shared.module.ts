// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// angular material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// modules
import { BtnRouterBackModule } from './components/btn-router-back/btn-router-back.module';
import { BtnResponsiveModule } from './components/btn-responsive/btn-responsive.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDividerModule,
    MatSnackBarModule,
    BtnRouterBackModule,
    BtnResponsiveModule
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDividerModule,
    RouterModule,
    BtnRouterBackModule,
    BtnResponsiveModule
  ]
})
export class SharedModule { }
