// MODULES
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../../shared/components/material/material.module';
import { ComponentModule } from '../../../shared/components/component.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProdutoRoutingModule } from './produto-routing.module';
import { FileInputModule } from 'src/app/shared/components/file input/file-input.module';
import { MaskModule } from 'src/app/shared/components/mask/mask.module';

// PAGES
import { ProdutoComponent } from './produto.component';
import { GeralProdutosComponent } from './geralProdutos/geralProdutos.component';
import { ProdutoEspecificoComponent } from './produto-especifico/produto-especifico.component';
import { AdicionarProdutoComponent } from './adicionarProduto/adicionarProduto.component';
import { EditarProdutoComponent } from './editarProduto/editarProduto.component';

// COMPONENTS
import { BottomOrderbyEmpresaComponent } from './produto-especifico/components/bottom-orderby-empresa/bottom-orderby-empresa.component';
import { DialogOrderbyEmpresaComponent } from './produto-especifico/components/dialog-orderby-empresa/dialog-orderby-empresa.component';

@NgModule({
  declarations: [
    GeralProdutosComponent,
    ProdutoComponent,
    AdicionarProdutoComponent,
    ProdutoEspecificoComponent,
    DialogOrderbyEmpresaComponent,
    BottomOrderbyEmpresaComponent,
    EditarProdutoComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ComponentModule,
    MaterialModule,
    FileInputModule,
    ProdutoRoutingModule,
    MaskModule
  ]
})
export class ProdutoModule {}
