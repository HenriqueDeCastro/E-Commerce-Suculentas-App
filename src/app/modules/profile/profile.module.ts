import { RouterModule } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileHomeComponent } from './profile-home/profile-home.component';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [
    ProfileHomeComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    RouterModule,
    SharedModule,
    MatListModule,
    MatGridListModule,
    MatBadgeModule
  ]
})
export class ProfileModule { }
