import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentModule } from 'src/app/shared/components/component.module';
import { MaterialModule } from 'src/app/shared/components/material/material.module';

import { ProdutosComponent } from './produtos.component';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosEspecificoComponent } from './produtos-especifico/produtos-especifico.component';
import { ProdutosHomeComponent } from './produtosHome/produtosHome.component';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from '../../shared/components/pagination/pagination.module';

@NgModule({
  declarations: [
    ProdutosComponent,
    ProdutosEspecificoComponent,
    ProdutosHomeComponent
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
