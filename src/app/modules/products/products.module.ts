import { BtnCartModule } from './../../shared/components/btn-cart/btn-cart.module';
import { MaskModule } from './../../shared/components/mask/mask.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { AlertWarningModule } from './../../shared/components/alert-warning/alert-warning.module';
import { NotFoundModule } from './../../shared/components/not-found/not-found.module';
import { BtnBackModule } from './../../shared/components/btn-back/btn-back.module';
import { ProductsCategoryModule } from './../../shared/components/products-category/products-category.module';
import { HomeProductsModule } from './../../shared/components/home-products/home-products.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsHomeComponent } from './products-home/products-home.component';
import { ProductsByCategoryComponent } from './products-by-category/products-by-category.component';
import { ProductsUnitaryComponent } from './products-unitary/products-unitary.component';
import { ListProductComponent } from './products-unitary/list-product/list-product.component';
import { AlertCityOrderModule } from 'src/app/shared/components/alert-city-order/alert-city-order.module';
import { ItemShippingComponent } from './products-unitary/item-shipping/item-shipping.component';
import { ItemOrderComponent } from './products-unitary/item-order/item-order.component';
import { ItemInventoryComponent } from './products-unitary/item-inventory/item-inventory.component';
import { BtnQuantityModule } from 'src/app/shared/components/btn-quantity/btn-quantity.module';
import { AlertInfoModule } from 'src/app/shared/components/alert-info/alert-info.module';


@NgModule({
  declarations: [
    ProductsHomeComponent,
    ProductsByCategoryComponent,
    ProductsUnitaryComponent,
    ListProductComponent,
    ItemShippingComponent,
    ItemOrderComponent,
    ItemInventoryComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    HomeProductsModule,
    ProductsCategoryModule,
    BtnBackModule,
    NotFoundModule,
    AlertWarningModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    AlertCityOrderModule,
    MaskModule,
    BtnQuantityModule,
    BtnCartModule,
    AlertInfoModule
  ]
})
export class ProductsModule { }
