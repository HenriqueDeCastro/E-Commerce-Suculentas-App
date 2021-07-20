import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MaskModule } from '../../shared/components/mask/mask.module';

import { MaterialModule } from 'src/app/shared/components/material/material.module';
import { UserRoutingModule } from './user-routing.module';
import { CommonModule } from '@angular/common';
import { ComponentModule } from 'src/app/shared/components/component.module';
import { EsqueciSenhaComponent } from './esqueciSenha/esqueciSenha.component';
import { ResetSenhaComponent } from './resetSenha/resetSenha.component';
import { PerfilModule } from './perfil/perfil.module';
import { NotAcessComponent } from './notAcess/notAcess.component';
import { PoliticaPrivacidadeComponent } from './politicaPrivacidade/politicaPrivacidade.component';
import { TermoUsoComponent } from './termoUso/termoUso.component';

// COMPONENTS
import { Secao1Component } from './politicaPrivacidade/components/secao1/secao1.component';
import { Secao2Component } from './politicaPrivacidade/components/secao2/secao2.component';
import { Secao3Component } from './politicaPrivacidade/components/secao3/secao3.component';
import { Secao4Component } from './politicaPrivacidade/components/secao4/secao4.component';
import { Secao5Component } from './politicaPrivacidade/components/secao5/secao5.component';
import { Secao6Component } from './politicaPrivacidade/components/secao6/secao6.component';
import { Secao7Component } from './politicaPrivacidade/components/secao7/secao7.component';
import { Secao8Component } from './politicaPrivacidade/components/secao8/secao8.component';
import { Secao9Component } from './politicaPrivacidade/components/secao9/secao9.component';
import { Secao10Component } from './politicaPrivacidade/components/secao10/secao10.component';
import { Secao11Component } from './politicaPrivacidade/components/secao11/secao11.component';
import { Secao12Component } from './politicaPrivacidade/components/secao12/secao12.component';
import { Secao13Component } from './politicaPrivacidade/components/secao13/secao13.component';

@NgModule({
  declarations: [
    UserComponent,
    LoginComponent,
    RegisterComponent,
    EsqueciSenhaComponent,
    ResetSenhaComponent,
    NotAcessComponent,
    PoliticaPrivacidadeComponent,
    TermoUsoComponent,
    Secao1Component,
    Secao2Component,
    Secao3Component,
    Secao4Component,
    Secao5Component,
    Secao6Component,
    Secao7Component,
    Secao8Component,
    Secao9Component,
    Secao10Component,
    Secao11Component,
    Secao12Component,
    Secao13Component
  ],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule,
    CommonModule,
    ComponentModule,
    MaskModule,
    PerfilModule
  ]
})
export class UserModule {}
