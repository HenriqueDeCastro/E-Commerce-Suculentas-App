// MODULES
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../../shared/components/material/material.module';
import { ComponentModule } from '../../../shared/components/component.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VendasRoutingModule } from './vendas-routing.module';
import { MaskModule } from '../../../shared/components/mask/mask.module';
import { PaginationModule } from '../../../shared/components/pagination/pagination.module';

// PAGES
import { VendasComponent } from './vendas.component';
import { VendasStatusComponent } from './vendas-status/vendas-status.component';
import { VendasDetalheComponent } from './vendas-detalhe/vendas-detalhe.component';

// COMPONENTS

@NgModule({
  declarations: [
    VendasComponent,
    VendasStatusComponent,
    VendasDetalheComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ComponentModule,
    MaterialModule,
    VendasRoutingModule,
    MaskModule,
    PaginationModule
  ]
})
export class VendasModule {}
