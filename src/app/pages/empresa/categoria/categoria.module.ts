// MODULES
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../../shared/components/material/material.module';
import { ComponentModule } from '../../../shared/components/component.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// PAGES
import { CategoriaComponent } from './categoria.component';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { CategoriaRoutingModule } from './categoria-routing.module';
import { GeralComponent } from './geral/geral.component';
import { EditarComponent } from './editar/editar.component';

// COMPONENTS
import { ListaCategoriaComponent } from './geral/components/lista-categoria/lista-categoria.component';
import { ListaCategoriaVaziaComponent } from './geral/components/lista-categoria-vazia/lista-categoria-vazia.component';

@NgModule({
  declarations: [
    CategoriaComponent,
    AdicionarComponent,
    GeralComponent,
    EditarComponent,
    ListaCategoriaComponent,
    ListaCategoriaVaziaComponent
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
