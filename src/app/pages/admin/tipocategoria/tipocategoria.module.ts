import { NgModule } from '@angular/core';
import { MaterialModule } from '../../../shared/components/material/material.module';
import { ComponentModule } from '../../../shared/components/component.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TipocategoriaGeralComponent } from './tipocategoria-geral/tipocategoria-geral.component';
import { TipocategoriaAddComponent } from './tipocategoria-add/tipocategoria-add.component';
import { TipocategoriaEditComponent } from './tipocategoria-edit/tipocategoria-edit.component';
import { TipocategoriaComponent } from './tipocategoria.component';
import { TipoCategoriaRoutingModule } from './tipocategoria-routing.module';


@NgModule({
  declarations: [
    TipocategoriaGeralComponent,
    TipocategoriaComponent,
    TipocategoriaAddComponent,
    TipocategoriaEditComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ComponentModule,
    MaterialModule,
    TipoCategoriaRoutingModule
  ]
})
export class TipoCategoriaModule {}
