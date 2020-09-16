import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { VoltarComponent } from './voltar/voltar.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    ProgressbarComponent,
    VoltarComponent,
    SpinnerComponent
  ],
  exports: [
    ProgressbarComponent,
    VoltarComponent,
    SpinnerComponent
  ],
  imports: [
    MaterialModule
  ]
})

export class ComponentModule { }
