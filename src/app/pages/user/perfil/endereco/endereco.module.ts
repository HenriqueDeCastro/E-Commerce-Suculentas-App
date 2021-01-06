import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaskModule } from '../../../../shared/components/mask/mask.module';

import { MaterialModule } from '../../../../shared/components/material/material.module';
import { ComponentModule } from '../../../../shared/components/component.module';
import { EnderecoRoutingModule } from './endereco-routing.module';

import { EnderecoComponent } from '../endereco/endereco.component';
import { EnderecoAddComponent } from '../endereco/endereco-add/endereco-add.component';
import { EnderecoEditComponent } from '../endereco/endereco-edit/endereco-edit.component';
import { EnderecoGeralComponent } from '../endereco/endereco-geral/endereco-geral.component';
import { BottomEnderecoDeleteComponent } from '../endereco/endereco-geral/components/bottom-endereco-delete/bottom-endereco-delete.component';
import { DialogEnderecoDeleteComponent } from '../endereco/endereco-geral/components/dialog-endereco-delete/dialog-endereco-delete.component';
import { ListEnderecoDeleteComponent } from '../endereco/endereco-geral/components/list-endereco-delete/list-endereco-delete.component';

@NgModule({
  declarations: [
    EnderecoComponent,
    EnderecoAddComponent,
    EnderecoEditComponent,
    EnderecoGeralComponent,
    BottomEnderecoDeleteComponent,
    DialogEnderecoDeleteComponent,
    ListEnderecoDeleteComponent
  ],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    EnderecoRoutingModule,
    CommonModule,
    ComponentModule,
    MaskModule
  ]
})
export class EnderecoModule {}
