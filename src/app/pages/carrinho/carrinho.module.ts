// MODULES
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../shared/components/material/material.module';
import { ComponentModule } from '../../shared/components/component.module';

// PAGES
import { CarrinhoComponent } from './carrinho.component';
import { CarrinhoRoutingModule } from './carrinho-routing.module';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { ProdutoCarrrinhoComponent } from './components/produto-carrrinho/produto-carrrinho.component';
import { BotoesCarrinhoComponent } from './components/botoes-carrinho/botoes-carrinho.component';
import { DialogEditCarrinhoComponent } from './components/dialog-edit-carrinho/dialog-edit-carrinho.component';
import { BottoomEditCarrinhoComponent } from './components/bottoom-edit-carrinho/bottoom-edit-carrinho.component';
import { SubtotalComponent } from './components/subtotal/subtotal.component';

@NgModule({
  declarations: [
    CarrinhoComponent,
    ProdutoCarrrinhoComponent,
    BotoesCarrinhoComponent,
    DialogEditCarrinhoComponent,
    BottoomEditCarrinhoComponent,
    SubtotalComponent
  ],
  imports: [
    MaterialModule,
    CarrinhoRoutingModule,
    ComponentModule,
    CommonModule
  ]
})
export class CarrinhoModule {}
