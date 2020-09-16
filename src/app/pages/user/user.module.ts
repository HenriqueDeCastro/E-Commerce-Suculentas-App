import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MaskModule } from '../../shared/components/mask/mask.module';

import { MaterialModule } from 'src/app/shared/components/material/material.module';
import { UserRoutingModule } from './user-routing.module';
import { CommonModule } from '@angular/common';
import { ComponentModule } from 'src/app/shared/components/component.module';

@NgModule({
  declarations: [
    UserComponent,
    LoginComponent,
    RegisterComponent,
    PerfilComponent
  ],
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    UserRoutingModule,
    CommonModule,
    ComponentModule,
    MaskModule
  ]
})
export class UserModule {}
