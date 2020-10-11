import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { VoltarComponent } from './voltar/voltar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { FiltroProdutosComponent } from './filtro-produtos/filtro-produtos.component';

@NgModule({
  declarations: [
    ProgressbarComponent,
    VoltarComponent,
    SpinnerComponent,
    FiltroProdutosComponent
  ],
  exports: [
    ProgressbarComponent,
    VoltarComponent,
    SpinnerComponent,
    FiltroProdutosComponent
  ],
  imports: [
    MaterialModule
  ]
})

export class ComponentModule { }
