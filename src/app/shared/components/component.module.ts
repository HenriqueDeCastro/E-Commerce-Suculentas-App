import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { VoltarComponent } from './voltar/voltar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { FiltroProdutosComponent } from './filtro-produtos/filtro-produtos.component';
import { FiltroProdutosEmpresaComponent } from './filtro-produtos-empresa/filtro-produtos-empresa.component';
import { DialogFiltroProdutosComponent } from './dialog-filtro-produtos/dialog-filtro-produtos.component';
import { DialogFiltroProdutosEmpresaComponent } from './dialog-filtro-produtos-empresa/dialog-filtro-produtos-empresa.component';
import { RotasSiteComponent } from './Rotas-Site/Rotas-Site.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ProgressbarComponent,
    VoltarComponent,
    SpinnerComponent,
    FiltroProdutosComponent,
    FiltroProdutosEmpresaComponent,
    RotasSiteComponent,
    FooterComponent,
    DialogFiltroProdutosComponent,
    DialogFiltroProdutosEmpresaComponent
  ],
  exports: [
    ProgressbarComponent,
    VoltarComponent,
    SpinnerComponent,
    FiltroProdutosComponent,
    FiltroProdutosEmpresaComponent,
    RotasSiteComponent,
    FooterComponent,
    DialogFiltroProdutosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})

export class ComponentModule { }
