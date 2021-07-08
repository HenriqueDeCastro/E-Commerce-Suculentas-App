// MODULES
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../../shared/components/material/material.module';
import { ComponentModule } from '../../../shared/components/component.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VendaRoutingModule } from './venda-routing.module';
import { MaskModule } from '../../../shared/components/mask/mask.module';

// PAGES
import { VendaComponent } from './venda.component';
import { VendaStatusComponent } from './venda-status/venda-status.component';
import { VendaDetalheComponent } from './venda-detalhe/venda-detalhe.component';

// COMPONENTS
import { ProdutoVendaDetalheComponent } from './venda-detalhe/components/produto-venda-detalhe/produto-venda-detalhe.component';
import { VendaDetalheEditarVendaComponent } from './venda-detalhe/components/venda-detalhe-editar-venda/venda-detalhe-editar-venda.component';

@NgModule({
  declarations: [
    VendaComponent,
    VendaStatusComponent,
    VendaDetalheComponent,
    ProdutoVendaDetalheComponent,
    VendaDetalheEditarVendaComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ComponentModule,
    MaterialModule,
    MaskModule,
    VendaRoutingModule
  ]
})
export class VendaModule {}
