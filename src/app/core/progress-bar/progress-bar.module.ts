// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// angular material
import { MatProgressBarModule } from '@angular/material/progress-bar';

// component
import { ProgressBarComponent } from './progress-bar.component';

@NgModule({
  declarations: [
    ProgressBarComponent
  ],
  imports: [
    CommonModule,
    MatProgressBarModule
  ],
  exports: [
    ProgressBarComponent
  ]
})
export class ProgressBarModule { }
