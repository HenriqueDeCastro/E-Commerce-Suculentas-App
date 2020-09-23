import { NgModule } from '@angular/core';
import { MaterialModule } from '../../shared/components/material/material.module';

import { SobreComponent } from './sobre.component';
import { SobreRoutingModule } from './sobre-routing.module';

@NgModule({
  declarations: [
    SobreComponent
  ],
  imports: [
    MaterialModule,
    SobreRoutingModule,
  ]
})
export class SobreModule {}
