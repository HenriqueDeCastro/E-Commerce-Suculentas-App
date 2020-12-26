// MODULE
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../../shared/components/material/material.module';
import { ComponentModule } from '../../../shared/components/component.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GerenciarRulesRoutingModule } from './gerenciar-rules-routing.module';

// PAGES
import { GerenciarRulesComponent } from './gerenciar-rules.component';
import { GerenciarRulesAddComponent } from './gerenciar-rules-add/gerenciar-rules-add.component';
import { GerenciarRulesGeralComponent } from './gerenciar-rules-geral/gerenciar-rules-geral.component';


@NgModule({
  declarations: [
    GerenciarRulesComponent,
    GerenciarRulesAddComponent,
    GerenciarRulesGeralComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ComponentModule,
    MaterialModule,
    GerenciarRulesRoutingModule
  ]
})
export class GerenciarRulesModule {}
