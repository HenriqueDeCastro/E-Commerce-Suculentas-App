import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaskModule } from '../../../../shared/components/mask/mask.module';

import { MaterialModule } from '../../../../shared/components/material/material.module';
import { ComponentModule } from '../../../../shared/components/component.module';
import { ComprasRoutingModule } from './compras-routing.module';

// COMPONENT
import { ProdutoCompraDetalheComponent } from './compras-detalhe/components/produto-compra-detalhe/produto-compra-detalhe.component';

// PAGE
import { ComprasComponent } from './compras.component';
import { ComprasStatusComponent } from './compras-status/compras-status.component';
import { ComprasDetalheComponent } from './compras-detalhe/compras-detalhe.component';

@NgModule({
  declarations: [
    ComprasComponent,
    ComprasStatusComponent,
    ComprasDetalheComponent,
    ProdutoCompraDetalheComponent
  ],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ComprasRoutingModule,
    CommonModule,
    ComponentModule,
    MaskModule,
  ]
})
export class ComprasModule {}
