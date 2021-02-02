// MODULE
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../../shared/components/material/material.module';
import { ComponentModule } from '../../../shared/components/component.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PromoverRoutingModule } from './promover-routing.module';

// PAGES
import { PromoverComponent } from './promover.component';
import { PromoverGeralComponent } from './promover-geral/promover-geral.component';
import { PromoverAddComponent } from './promover-add/promover-add.component';

@NgModule({
  declarations: [
    PromoverComponent,
    PromoverGeralComponent,
    PromoverAddComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ComponentModule,
    MaterialModule,
    PromoverRoutingModule
  ]
})
export class PromoverModule {}
