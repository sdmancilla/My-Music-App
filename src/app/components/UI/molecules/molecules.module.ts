import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AtomsModule } from '../atoms/atoms.module';

import { JoinBtnComponent } from './join-btn/join-btn.component';
import { FigureComponent } from './figure/figure.component';
import { AditionalInfoComponent } from './aditional-info/aditional-info.component';
import { CardSectionComponent } from './card-section/card-section.component';
import { IconComponent } from './icon/icon.component';


@NgModule({
  declarations: [
    JoinBtnComponent,
    FigureComponent,
    AditionalInfoComponent,
    CardSectionComponent,
    IconComponent,
  ],
  imports: [
    BrowserModule,
    AtomsModule
  ],
  exports: [
    JoinBtnComponent,
    FigureComponent,
    AditionalInfoComponent,
    CardSectionComponent,
    IconComponent,
  ]
})
export class MoleculesModule { }