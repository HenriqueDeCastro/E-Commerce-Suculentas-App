import { ListDinamicModule } from './../../../shared/components/list-dinamic/list-dinamic.module';
import { MatListModule } from '@angular/material/list';
import { TitleButtonAddModule } from './../../../shared/components/title-button-add/title-button-add.module';
import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPromotionRoutingModule } from './admin-promotion-routing.module';
import { AdminPromotionHomeComponent } from './admin-promotion-home/admin-promotion-home.component';
import { AdminPromotionAddComponent } from './admin-promotion-add/admin-promotion-add.component';
import { FormUserComponent } from './admin-promotion-add/form-user/form-user.component';
import { MatStepperModule } from '@angular/material/stepper';
import { RequiredFieldsModule } from 'src/app/shared/components/required-fields/required-fields.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormRoleComponent } from './admin-promotion-add/form-role/form-role.component';
import { MatSelectModule } from '@angular/material/select';
import { AlertWarningModule } from 'src/app/shared/components/alert-warning/alert-warning.module';
import { DialogConfirmRelegationComponent } from './admin-promotion-home/dialog-confirm-relegation/dialog-confirm-relegation.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AdminPromotionHomeComponent,
    AdminPromotionAddComponent,
    FormUserComponent,
    FormRoleComponent,
    DialogConfirmRelegationComponent
  ],
  imports: [
    CommonModule,
    AdminPromotionRoutingModule,
    SharedModule,
    TitleButtonAddModule,
    MatListModule,
    ListDinamicModule,
    MatStepperModule,
    RequiredFieldsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    AlertWarningModule,
    MatDialogModule
  ]
})
export class AdminPromotionModule { }
