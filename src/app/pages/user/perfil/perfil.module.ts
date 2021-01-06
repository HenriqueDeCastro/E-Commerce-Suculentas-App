import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaskModule } from '../../../shared/components/mask/mask.module';

import { MaterialModule } from '../../../shared/components/material/material.module';
import { ComponentModule } from '../../../shared/components/component.module';
import { PerfilRoutingModule } from './perfil-routing.module';
import { EnderecoModule } from './endereco/endereco.module';
import { DadosPessoaisModule } from './dados-pessoais/dados-pessoais.module';

import { PerfilComponent } from '../perfil/perfil.component';
import { PerfilGeralComponent } from '../perfil/perfil-geral/perfil-geral.component';


@NgModule({
  declarations: [
    PerfilComponent,
    PerfilGeralComponent
  ],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PerfilRoutingModule,
    CommonModule,
    ComponentModule,
    MaskModule,
    EnderecoModule,
    DadosPessoaisModule
  ]
})
export class PerfilModule {}
