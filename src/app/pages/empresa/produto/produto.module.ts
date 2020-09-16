import { NgModule } from '@angular/core';
import { MaterialModule } from '../../../shared/components/material/material.module';
import { ComponentModule } from '../../../shared/components/component.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoComponent } from './produto.component';
import { GeralProdutosComponent } from './geralProdutos/geralProdutos.component';
import { AdicionarProdutoComponent } from './adicionarProduto/adicionarProduto.component';

@NgModule({
  declarations: [
    GeralProdutosComponent,
    ProdutoComponent,
    AdicionarProdutoComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ComponentModule,
    MaterialModule,
    ProdutoRoutingModule
  ]
})
export class ProdutoModule {}
