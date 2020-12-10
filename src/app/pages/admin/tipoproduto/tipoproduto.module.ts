// MODULE
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../../shared/components/material/material.module';
import { ComponentModule } from '../../../shared/components/component.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TipoProdutoRoutingModule } from './tipoproduto-routing.module';

// PAGES
import { TipoprodutoGeralComponent } from './tipoproduto-geral/tipoproduto-geral.component';
import { TipoprodutoAddComponent } from './tipoproduto-add/tipoproduto-add.component';
import { TipoprodutoEditComponent } from './tipoproduto-edit/tipoproduto-edit.component';
import { TipoprodutoComponent } from './tipoproduto.component';

// COMPONENTS
import { ListaTipoprodutoComponent } from './tipoproduto-geral/components/lista-tipoproduto/lista-tipoproduto.component';

@NgModule({
  declarations: [
    TipoprodutoGeralComponent,
    TipoprodutoAddComponent,
    TipoprodutoEditComponent,
    TipoprodutoComponent,
    ListaTipoprodutoComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ComponentModule,
    MaterialModule,
    TipoProdutoRoutingModule
  ]
})
export class TipoProdutoModule {}
