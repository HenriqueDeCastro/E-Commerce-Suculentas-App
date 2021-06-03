// MODULES
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';

// COMPONENTS
import { BotaoCarrinhoComponent } from './botao-carrinho/botao-carrinho.component';
import { BotaoQuantidadeComponent } from './botao-quantidade/botao-quantidade.component';
import { BotaoVermaisComponent } from './botao-vermais/botao-vermais.component';
import { CardProdutoComponent } from './card-produto/card-produto.component';
import { CardProdutoEmpresaComponent } from './card-produto-empresa/card-produto-empresa.component';
import { FooterComponent } from './footer/footer.component';
import { ListaOrderbyProdutoComponent } from './lista-orderby-produto/lista-orderby-produto.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { ProgressbarToolbarComponent } from './progressbar-toolbar/progressbar-toolbar.component';
import { RotasSiteComponent } from './Rotas-Site/Rotas-Site.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { TituloMaisAddComponent } from './titulo-mais-add/titulo-mais-add.component';
import { VoltarComponent } from './voltar/voltar.component';
import { EditCarrinhoComponent } from './edit-carrinho/edit-carrinho.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AlertCamposObrigatoriosComponent } from './alert-campos-obrigatorios/alert-campos-obrigatorios.component';
import { AlertCidadesEncomendaComponent } from './alert-cidades-encomenda/alert-cidades-encomenda.component';

@NgModule({
  declarations: [
    ProgressbarComponent,
    VoltarComponent,
    SpinnerComponent,
    RotasSiteComponent,
    FooterComponent,
    PesquisaComponent,
    CardProdutoComponent,
    BotaoCarrinhoComponent,
    TituloMaisAddComponent,
    CardProdutoEmpresaComponent,
    BotaoVermaisComponent,
    ListaOrderbyProdutoComponent,
    EditCarrinhoComponent,
    BotaoQuantidadeComponent,
    NotFoundComponent,
    AlertCamposObrigatoriosComponent,
    AlertCidadesEncomendaComponent,
    ProgressbarToolbarComponent
  ],
  exports: [
    ProgressbarComponent,
    VoltarComponent,
    SpinnerComponent,
    RotasSiteComponent,
    FooterComponent,
    PesquisaComponent,
    CardProdutoComponent,
    BotaoCarrinhoComponent,
    TituloMaisAddComponent,
    CardProdutoEmpresaComponent,
    BotaoVermaisComponent,
    ListaOrderbyProdutoComponent,
    EditCarrinhoComponent,
    BotaoQuantidadeComponent,
    NotFoundComponent,
    AlertCamposObrigatoriosComponent,
    AlertCidadesEncomendaComponent,
    ProgressbarToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})

export class ComponentModule { }
