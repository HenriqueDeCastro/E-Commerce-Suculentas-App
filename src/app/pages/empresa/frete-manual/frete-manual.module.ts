// MODULES
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../../shared/components/material/material.module';
import { ComponentModule } from '../../../shared/components/component.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FreteManualRoutingModule } from './frete-manual-routing.module';
import { MaskModule } from '../../../../../src/app/shared/components/mask/mask.module';


// PAGES
import { FreteManualComponent } from './frete-manual.component';

@NgModule({
  declarations: [
    FreteManualComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ComponentModule,
    MaterialModule,
    FreteManualRoutingModule,
    MaskModule,
  ]
})
export class FreteManualModule {}
