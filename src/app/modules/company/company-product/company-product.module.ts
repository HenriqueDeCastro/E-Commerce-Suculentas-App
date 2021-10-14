import { MatSelectModule } from '@angular/material/select';
import { RequiredFieldsModule } from 'src/app/shared/components/required-fields/required-fields.module';
import { HomeProductsModule } from './../../../shared/components/home-products/home-products.module';
import { TitleButtonAddModule } from './../../../shared/components/title-button-add/title-button-add.module';
import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyProductRoutingModule } from './company-product-routing.module';
import { CompanyProductHomeComponent } from './company-product-home/company-product-home.component';
import { CompanyProductAddComponent } from './company-product-add/company-product-add.component';
import { MatStepperModule } from '@angular/material/stepper';
import { FormIdentificationComponent } from './company-product-add/form-identification/form-identification.component';
import { FormInformationComponent } from './company-product-add/form-information/form-information.component';
import { FormValuesComponent } from './company-product-add/form-values/form-values.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MaskModule } from 'src/app/shared/components/mask/mask.module';
import { CompanyProductEditComponent } from './company-product-edit/company-product-edit.component';
import { FormIdentificationEditComponent } from './company-product-edit/form-identification-edit/form-identification-edit.component';
import { FormInformationEditComponent } from './company-product-edit/form-information-edit/form-information-edit.component';
import { FormValuesEditComponent } from './company-product-edit/form-values-edit/form-values-edit.component';
import { CompanyProductCategoryComponent } from './company-product-category/company-product-category.component';
import { ProductsCategoryModule } from 'src/app/shared/components/products-category/products-category.module';
import { NotFoundModule } from 'src/app/shared/components/not-found/not-found.module';
import { BtnBackModule } from 'src/app/shared/components/btn-back/btn-back.module';


@NgModule({
  declarations: [
    CompanyProductHomeComponent,
    CompanyProductAddComponent,
    FormIdentificationComponent,
    FormInformationComponent,
    FormValuesComponent,
    CompanyProductEditComponent,
    FormIdentificationEditComponent,
    FormInformationEditComponent,
    FormValuesEditComponent,
    CompanyProductCategoryComponent
  ],
  imports: [
    CommonModule,
    CompanyProductRoutingModule,
    SharedModule,
    TitleButtonAddModule,
    HomeProductsModule,
    RequiredFieldsModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MaterialFileInputModule,
    MaskModule,
    ProductsCategoryModule,
    NotFoundModule,
    BtnBackModule
  ]
})
export class CompanyProductModule { }
