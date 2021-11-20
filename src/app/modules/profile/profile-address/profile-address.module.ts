import { BtnBackModule } from './../../../shared/components/btn-back/btn-back.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MaskModule } from './../../../shared/components/mask/mask.module';
import { MatOptionModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { RequiredFieldsModule } from './../../../shared/components/required-fields/required-fields.module';
import { ListDinamicModule } from './../../../shared/components/list-dinamic/list-dinamic.module';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { TitleButtonAddModule } from './../../../shared/components/title-button-add/title-button-add.module';
import { BtnResponsiveModule } from './../../../shared/components/btn-responsive/btn-responsive.module';
import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileAddressRoutingModule } from './profile-address-routing.module';
import { ProfileAddressHomeComponent } from './profile-address-home/profile-address-home.component';
import { ProfileAddressAddComponent } from './profile-address-add/profile-address-add.component';
import { ProfileAddressEditComponent } from './profile-address-edit/profile-address-edit.component';
import { MatMenuModule } from '@angular/material/menu';
import { FormLocationComponent } from './form-location/form-location.component';
import { MatSelectModule } from '@angular/material/select';
import { MatSelectFilterModule } from 'mat-select-filter';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { BottomDeleteComponent } from './profile-address-home/bottom-delete/bottom-delete.component';
import { DialogDeleteComponent } from './profile-address-home/dialog-delete/dialog-delete.component';
import { ViewDeleteComponent } from './profile-address-home/view-delete/view-delete.component';

@NgModule({
  declarations: [
    ProfileAddressHomeComponent,
    ProfileAddressAddComponent,
    ProfileAddressEditComponent,
    FormLocationComponent,
    FormResidenceComponent,
    BottomDeleteComponent,
    DialogDeleteComponent,
    ViewDeleteComponent
  ],
  imports: [
    CommonModule,
    ProfileAddressRoutingModule,
    SharedModule,
    BtnResponsiveModule,
    TitleButtonAddModule,
    MatListModule,
    MatMenuModule,
    ListDinamicModule,
    RequiredFieldsModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    MatSelectFilterModule,
    MaskModule,
    MatDialogModule,
    BtnBackModule
  ]
})
export class ProfileAddressModule { }
