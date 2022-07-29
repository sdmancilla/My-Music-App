import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganismsModule } from '../organisms/organisms.module';

import { MainLandingComponent } from './main-landing/main-landing.component';
import { MainComponent } from './main/main.component';



@NgModule({
  declarations: [
    MainLandingComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    OrganismsModule
  ],
  exports: [
    
  ]
})
export class TemplatesModule { }
