import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/components/material/material.module';

import { ProdutosComponent } from './produtos.component';

@NgModule({
  declarations: [
    ProdutosComponent
  ],
  imports: [
    MaterialModule
  ]
})
export class ProdutosModule {}
