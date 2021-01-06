import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaskModule } from '../../../../shared/components/mask/mask.module';

import { MaterialModule } from '../../../../shared/components/material/material.module';
import { ComponentModule } from '../../../../shared/components/component.module';
import { DadosPessoaisRoutingModule } from './dados-pessoais-routing.module';

import { DadosPessoaisComponent } from '../dados-pessoais/dados-pessoais.component';
import { DadosPessoaisGeralComponent } from '../dados-pessoais/dados-pessoais-geral/dados-pessoais-geral.component';
import { DadosPessoaisEditComponent } from '../dados-pessoais/dados-pessoais-edit/dados-pessoais-edit.component';

@NgModule({
  declarations: [
    DadosPessoaisComponent,
    DadosPessoaisEditComponent,
    DadosPessoaisGeralComponent
  ],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    DadosPessoaisRoutingModule,
    CommonModule,
    ComponentModule,
    MaskModule
  ]
})
export class DadosPessoaisModule {}
