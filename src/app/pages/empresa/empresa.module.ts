import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/components/material/material.module';

import { EmpresaComponent } from './empresa.component';
import { EmpresaRoutingModule } from './empresa-routing.module';
import { HomeComponent } from './home/home.component';
import { ComponentModule } from 'src/app/shared/components/component.module';
import { CategoriaModule } from './categoria/categoria.module';
import { ProdutoModule } from './produto/produto.module';

@NgModule({
  declarations: [
    EmpresaComponent,
    HomeComponent
  ],
  imports: [
    ComponentModule,
    MaterialModule,
    EmpresaRoutingModule,
    CategoriaModule,
    ProdutoModule
  ]
})
export class EmpresaModule {}
