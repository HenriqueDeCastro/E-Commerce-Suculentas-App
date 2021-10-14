import { AlertWarningModule } from './../../shared/components/alert-warning/alert-warning.module';
// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// angular material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';

// modules
import { SharedModule } from './../../shared/shared.module';
import { RequiredFieldsModule } from 'src/app/shared/components/required-fields/required-fields.module';
import { MaskModule } from 'src/app/shared/components/mask/mask.module';
import { BtnWindowCloseModule } from './../../shared/components/btn-window-close/btn-window-close.module';

//components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormPersonalDataComponent } from './register/form-personal-data/form-personal-data.component';
import { FormContactsComponent } from './register/form-contacts/form-contacts.component';
import { FormPasswordsComponent } from './register/form-passwords/form-passwords.component';
import { TermsComponent } from './terms/terms.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    FormPersonalDataComponent,
    FormContactsComponent,
    FormPasswordsComponent,
    TermsComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RequiredFieldsModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatCheckboxModule,
    MaskModule,
    BtnWindowCloseModule,
    AlertWarningModule
  ]
})
export class UserModule { }
