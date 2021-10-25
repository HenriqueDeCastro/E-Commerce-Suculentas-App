import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessControlDirective } from './access-control.directive';

@NgModule({
  declarations: [
    AccessControlDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AccessControlDirective
  ]
})
export class AccessControlModule { }
