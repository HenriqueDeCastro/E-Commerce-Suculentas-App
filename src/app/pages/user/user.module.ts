import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MaskModule } from '../../shared/components/mask/mask.module';

import { MaterialModule } from 'src/app/shared/components/material/material.module';
import { UserRoutingModule } from './user-routing.module';
import { CommonModule } from '@angular/common';
import { ComponentModule } from 'src/app/shared/components/component.module';
import { EsqueciSenhaComponent } from './esqueciSenha/esqueciSenha.component';
import { ResetSenhaComponent } from './resetSenha/resetSenha.component';

@NgModule({
  declarations: [
    UserComponent,
    LoginComponent,
    RegisterComponent,
    PerfilComponent,
    EsqueciSenhaComponent,
    ResetSenhaComponent
  ],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule,
    CommonModule,
    ComponentModule,
    MaskModule
  ]
})
export class UserModule {}
