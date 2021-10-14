import { MaskModule } from './../../../shared/components/mask/mask.module';
import { ListDinamicModule } from './../../../shared/components/list-dinamic/list-dinamic.module';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyManualFreightRoutingModule } from './company-manual-freight-routing.module';
import { CompanyManualFreightComponent } from './company-manual-freight.component';


@NgModule({
  declarations: [
    CompanyManualFreightComponent
  ],
  imports: [
    CommonModule,
    CompanyManualFreightRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    ListDinamicModule,
    MaskModule
  ]
})
export class CompanyManualFreightModule { }
