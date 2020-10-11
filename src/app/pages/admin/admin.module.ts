import { NgModule } from '@angular/core';
import { MaterialModule } from '../../shared/components/material/material.module';

import { AdminRoutingModule } from './admin-routing.module';
import { ComponentModule } from '../../shared/components/component.module';

import { AdminComponent } from './admin.component';
import { HomeAdminComponent } from './homeAdmin/homeAdmin.component';
import { TipoCategoriaModule } from './tipocategoria/tipocategoria.module';

@NgModule({
  declarations: [
    AdminComponent,
    HomeAdminComponent
  ],
  imports: [
    ComponentModule,
    MaterialModule,
    AdminRoutingModule,
    TipoCategoriaModule
  ]
})
export class AdminModule {}
