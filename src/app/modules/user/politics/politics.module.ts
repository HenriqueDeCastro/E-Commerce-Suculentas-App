import { BtnWindowCloseModule } from './../../../shared/components/btn-window-close/btn-window-close.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliticsRoutingModule } from './politics-routing.module';
import { PoliticsComponent } from './politics.component';
import { SectionOneComponent } from './section-one/section-one.component';
import { SectionTwoComponent } from './section-two/section-two.component';
import { SectionThreeComponent } from './section-three/section-three.component';
import { SectionFourComponent } from './section-four/section-four.component';
import { SectionFiveComponent } from './section-five/section-five.component';
import { SectionSixComponent } from './section-six/section-six.component';
import { SectionSevenComponent } from './section-seven/section-seven.component';
import { SectionEightComponent } from './section-eight/section-eight.component';
import { SectionNineComponent } from './section-nine/section-nine.component';
import { SectionTenComponent } from './section-ten/section-ten.component';
import { SectionElevenComponent } from './section-eleven/section-eleven.component';
import { SectionTwelveComponent } from './section-twelve/section-twelve.component';
import { SectionThirteenComponent } from './section-thirteen/section-thirteen.component';


@NgModule({
  declarations: [
    PoliticsComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    SectionFourComponent,
    SectionFiveComponent,
    SectionSixComponent,
    SectionSevenComponent,
    SectionEightComponent,
    SectionNineComponent,
    SectionTenComponent,
    SectionElevenComponent,
    SectionTwelveComponent,
    SectionThirteenComponent
  ],
  imports: [
    CommonModule,
    BtnWindowCloseModule,
    PoliticsRoutingModule
  ]
})
export class PoliticsModule { }
