import { MatIconModule } from '@angular/material/icon';
import { RequiredFieldsModule } from 'src/app/shared/components/required-fields/required-fields.module';
import { ListDinamicModule } from './../../../shared/components/list-dinamic/list-dinamic.module';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from './../../../shared/shared.module';
import { TitleButtonAddModule } from './../../../shared/components/title-button-add/title-button-add.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRolesRoutingModule } from './admin-roles-routing.module';
import { AdminRolesHomeComponent } from './admin-roles-home/admin-roles-home.component';
import { AdminRolesAddComponent } from './admin-roles-add/admin-roles-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InitializeRolesComponent } from './admin-roles-home/initialize-roles/initialize-roles.component';


@NgModule({
  declarations: [
    AdminRolesHomeComponent,
    AdminRolesAddComponent,
    InitializeRolesComponent
  ],
  imports: [
    CommonModule,
    AdminRolesRoutingModule,
    TitleButtonAddModule,
    SharedModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ListDinamicModule,
    RequiredFieldsModule,
  ]
})
export class AdminRolesModule { }
