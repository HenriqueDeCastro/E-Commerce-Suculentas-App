import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertInfoComponent } from './alert-info.component';



@NgModule({
  declarations: [
    AlertInfoComponent
  ],
  imports: [
    CommonModule
  ],
   exports: [
     AlertInfoComponent
   ]
})
export class AlertInfoModule { }
