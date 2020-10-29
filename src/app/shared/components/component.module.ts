import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { VoltarComponent } from './voltar/voltar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { FiltroProdutosComponent } from './filtro-produtos/filtro-produtos.component';
import { RotasSiteComponent } from './Rotas-Site/Rotas-Site.component';
import { AppRoutingModule } from 'src/app/pages/app-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ProgressbarComponent,
    VoltarComponent,
    SpinnerComponent,
    FiltroProdutosComponent,
    RotasSiteComponent
  ],
  exports: [
    ProgressbarComponent,
    VoltarComponent,
    SpinnerComponent,
    FiltroProdutosComponent,
    RotasSiteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})

export class ComponentModule { }
