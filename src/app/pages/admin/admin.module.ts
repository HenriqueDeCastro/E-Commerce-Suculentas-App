import { NgModule } from '@angular/core';
import { MaterialModule } from '../../shared/components/material/material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { ComponentModule } from '../../shared/components/component.module';
import { GerenciarRulesModule } from './gerenciar-rules/gerenciar-rules.module';

import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { PromoverModule } from './promover/promover.module';

@NgModule({
  declarations: [
    AdminComponent,
    AdminHomeComponent
  ],
  imports: [
    ComponentModule,
    MaterialModule,
    AdminRoutingModule,
    PromoverModule,
    GerenciarRulesModule
  ]
})
export class AdminModule {}
