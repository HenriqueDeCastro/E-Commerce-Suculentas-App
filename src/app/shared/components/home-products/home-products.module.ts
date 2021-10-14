import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeProductsComponent } from './home-products.component';
import { DivideDottedComponent } from './divide-dotted/divide-dotted.component';
import { MatDividerModule } from '@angular/material/divider';
import { CardListProductsModule } from '../card-list-products/card-list-products.module';

@NgModule({
  declarations: [
    HomeProductsComponent,
    DivideDottedComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    CardListProductsModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    HomeProductsComponent
  ]
})
export class HomeProductsModule { }
