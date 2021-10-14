import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule
  ],
  exports: [
    NotFoundComponent,
  ]
})
export class NotFoundModule { }
