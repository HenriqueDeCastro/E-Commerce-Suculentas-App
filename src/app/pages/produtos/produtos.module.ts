// MODULE
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentModule } from 'src/app/shared/components/component.module';
import { MaterialModule } from 'src/app/shared/components/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// PAGES
import { ProdutosComponent } from './produtos.component';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosEspecificoComponent } from './produtos-especifico/produtos-especifico.component';
import { ProdutosHomeComponent } from './produtosHome/produtosHome.component';
import { ProdutoUnitarioComponent } from './produto-unitario/produto-unitario.component';

// COMPONENTS
import { DialogOrderbyComponent } from './produtos-especifico/components/dialog-orderby/dialog-orderby.component';
import { BottomOrderbyComponent } from './produtos-especifico/components/bottom-orderby/bottom-orderby.component';
import { MaskModule } from 'src/app/shared/components/mask/mask.module';

@NgModule({
  declarations: [
    ProdutosComponent,
    ProdutosEspecificoComponent,
    ProdutosHomeComponent,
    ProdutoUnitarioComponent,
    DialogOrderbyComponent,
    BottomOrderbyComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    CommonModule,
    ComponentModule,
    MaskModule,
    ProdutosRoutingModule
  ]
})
export class ProdutosModule {}
