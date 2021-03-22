import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaskModule } from '../../shared/components/mask/mask.module';

import { MaterialModule } from '../../shared/components/material/material.module';
import { VendasRoutingModule } from './vendas-routing.module';
import { CommonModule } from '@angular/common';
import { ComponentModule } from '../../shared/components/component.module';

// COMPONENTS
import { ProdutosVendaComponent } from './finalizarVendas/components/produtos-venda/produtos-venda.component';
import { TabelaProdutosComponent } from './finalizarVendas/components/tabela-produtos/tabela-produtos.component';
import { SelecaoEnderecosComponent } from './finalizarVendas/components/selecao-enderecos/selecao-enderecos.component';
import { BotaoVendaComponent } from './finalizarVendas/components/botao-venda/botao-venda.component';

// PAGES
import { VendasComponent } from './vendas.component';
import { FinalizarVendasComponent } from './finalizarVendas/finalizarVendas.component';

@NgModule({
  declarations: [
    VendasComponent,
    FinalizarVendasComponent,
    ProdutosVendaComponent,
    TabelaProdutosComponent,
    SelecaoEnderecosComponent,
    BotaoVendaComponent
  ],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    VendasRoutingModule,
    CommonModule,
    ComponentModule,
    MaskModule
  ]
})
export class VendasModule {}
