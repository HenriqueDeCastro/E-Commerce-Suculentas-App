import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequiredFieldsComponent } from './required-fields.component';

@NgModule({
  declarations: [
    RequiredFieldsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RequiredFieldsComponent
  ]
})
export class RequiredFieldsModule { }
