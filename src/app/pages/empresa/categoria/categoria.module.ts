import { NgModule } from '@angular/core';
import { MaterialModule } from '../../../shared/components/material/material.module';
import { ComponentModule } from '../../../shared/components/component.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CategoriaComponent } from './categoria.component';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { CategoriaRoutingModule } from './categoria-routing.module';
import { GeralComponent } from './geral/geral.component';
import { EditarComponent } from './editar/editar.component';


@NgModule({
  declarations: [
    CategoriaComponent,
    AdicionarComponent,
    GeralComponent,
    EditarComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ComponentModule,
    MaterialModule,
    CategoriaRoutingModule
  ]
})
export class CategoriaModule {}
