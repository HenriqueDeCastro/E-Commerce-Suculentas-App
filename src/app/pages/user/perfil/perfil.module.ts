import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaskModule } from '../../../shared/components/mask/mask.module';

import { MaterialModule } from '../../../shared/components/material/material.module';
import { ComponentModule } from '../../../shared/components/component.module';
import { PerfilRoutingModule } from './perfil-routing.module';

import { PerfilComponent } from '../perfil/perfil.component';
import { DadosPerfilComponent } from '../perfil/dados-perfil/dados-perfil.component';
import { DadosPessoaisComponent } from '../perfil/dados-pessoais/dados-pessoais.component';
import { DadosPessoaisEditComponent } from '../perfil/dados-pessoais-edit/dados-pessoais-edit.component';

@NgModule({
  declarations: [
    PerfilComponent,
    DadosPerfilComponent,
    DadosPessoaisComponent,
    DadosPessoaisEditComponent
  ],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PerfilRoutingModule,
    CommonModule,
    ComponentModule,
    MaskModule
  ]
})
export class PerfilModule {}
