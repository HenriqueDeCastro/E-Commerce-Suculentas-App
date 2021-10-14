import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from './../../shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
