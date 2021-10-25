// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

// modules
import { SharedModule } from './../../shared/shared.module';

// components
import { ToolbarComponent } from './toolbar.component';
import { RoutersMenuComponent } from './routers-menu/routers-menu.component';
import { BottomSheetToolbarComponent } from './bottom-sheet-toolbar/bottom-sheet-toolbar.component';
import { AccessControlModule } from 'src/app/shared/directives/access-control/access-control.module';

@NgModule({
  declarations: [
    ToolbarComponent,
    RoutersMenuComponent,
    BottomSheetToolbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,
    MatBottomSheetModule,
    SharedModule,
    AccessControlModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class ToolbarModule { }
