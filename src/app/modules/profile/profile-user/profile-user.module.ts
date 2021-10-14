import { AlertWarningModule } from './../../../shared/components/alert-warning/alert-warning.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaskModule } from './../../../shared/components/mask/mask.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileUserRoutingModule } from './profile-user-routing.module';
import { ProfileUserEditComponent } from './profile-user-edit/profile-user-edit.component';
import { ProfileUserHomeComponent } from './profile-user-home/profile-user-home.component';
import { FormIdentificationComponent } from './form-identification/form-identification.component';
import { MatStepperModule } from '@angular/material/stepper';
import { FormContactComponent } from './form-contact/form-contact.component';


@NgModule({
  declarations: [
    ProfileUserEditComponent,
    ProfileUserHomeComponent,
    FormIdentificationComponent,
    FormContactComponent
  ],
  imports: [
    CommonModule,
    ProfileUserRoutingModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MaskModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    AlertWarningModule
  ]
})
export class ProfileUserModule { }
