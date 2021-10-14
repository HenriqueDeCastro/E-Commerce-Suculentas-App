import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { CardListProductsModule } from './../card-list-products/card-list-products.module';
import { SharedModule } from './../../shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsCategoryComponent } from './products-category.component';
import { NotFoundModule } from '../not-found/not-found.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { SearchModule } from '../search/search.module';
import { BottomOrderbyComponent } from './bottom-orderby/bottom-orderby.component';
import { DialogOrderbyComponent } from './dialog-orderby/dialog-orderby.component';
import { ListOrderbyComponent } from './list-orderby/list-orderby.component';


@NgModule({
  declarations: [
    ProductsCategoryComponent,
    BottomOrderbyComponent,
    DialogOrderbyComponent,
    ListOrderbyComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NotFoundModule,
    MatExpansionModule,
    SearchModule,
    CardListProductsModule,
    MatListModule,
    MatDialogModule,
    MatBottomSheetModule
  ],
  exports: [
    ProductsCategoryComponent
  ]
})
export class ProductsCategoryModule { }
