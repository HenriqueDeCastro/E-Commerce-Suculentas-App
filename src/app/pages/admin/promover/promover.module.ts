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
import { BottomDeletePromoverComponent } from './promover-geral/components/bottom-delete-promover/bottom-delete-promover.component'
import { DialogDeletePromoverComponent } from './promover-geral/components/dialog-delete-promover/dialog-delete-promover.component'
import { ListDeletePromoverComponent } from './promover-geral/components/list-delete-promover/list-delete-promover.component'

@NgModule({
  declarations: [
    PromoverComponent,
    PromoverGeralComponent,
    PromoverAddComponent,
    BottomDeletePromoverComponent,
    DialogDeletePromoverComponent,
    ListDeletePromoverComponent
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
