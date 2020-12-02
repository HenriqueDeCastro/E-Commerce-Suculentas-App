// MODULE
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentModule } from 'src/app/shared/components/component.module';
import { MaterialModule } from 'src/app/shared/components/material/material.module';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from '../../shared/components/pagination/pagination.module';

// PAGES
import { ProdutosComponent } from './produtos.component';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosEspecificoComponent } from './produtos-especifico/produtos-especifico.component';
import { ProdutosHomeComponent } from './produtosHome/produtosHome.component';
import { ProdutoUnitarioComponent } from './produto-unitario/produto-unitario.component';

// COMPONENTS
import { DialogOrderbyComponent } from './produtos-especifico/components/dialog-orderby/dialog-orderby.component';
import { BottomOrderbyComponent } from './produtos-especifico/components/bottom-orderby/bottom-orderby.component';

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
    MaterialModule,
    FormsModule,
    CommonModule,
    ComponentModule,
    ProdutosRoutingModule,
    PaginationModule
  ]
})
export class ProdutosModule {}
