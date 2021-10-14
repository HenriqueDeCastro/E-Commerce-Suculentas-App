import { MatSelectModule } from '@angular/material/select';
import { ListDinamicModule } from './../../../shared/components/list-dinamic/list-dinamic.module';
import { MatListModule } from '@angular/material/list';
import { TitleButtonAddModule } from './../../../shared/components/title-button-add/title-button-add.module';
import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyCategoryRoutingModule } from './company-category-routing.module';
import { CompanyCategoryHomeComponent } from './company-category-home/company-category-home.component';
import { CompanyCategoryAddComponent } from './company-category-add/company-category-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RequiredFieldsModule } from 'src/app/shared/components/required-fields/required-fields.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CompanyCategoryEditComponent } from './company-category-edit/company-category-edit.component';
import { MatOptionModule } from '@angular/material/core';


@NgModule({
  declarations: [
    CompanyCategoryHomeComponent,
    CompanyCategoryAddComponent,
    CompanyCategoryEditComponent
  ],
  imports: [
    CommonModule,
    CompanyCategoryRoutingModule,
    SharedModule,
    TitleButtonAddModule,
    ReactiveFormsModule,
    FormsModule,
    RequiredFieldsModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    ListDinamicModule,
    MatOptionModule,
    MatSelectModule
  ]
})
export class CompanyCategoryModule { }
