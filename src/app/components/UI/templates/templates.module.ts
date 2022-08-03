import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganismsModule } from '../organisms/organisms.module';

import { MainLandingComponent } from './main-landing/main-landing.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { HeaderLandingComponent } from './header-landing/header-landing.component';



@NgModule({
  declarations: [
    MainLandingComponent,
    MainComponent,
    HeaderComponent,
    HeaderLandingComponent
  ],
  imports: [
    CommonModule,
    OrganismsModule
  ],
  exports: [
    
  ]
})
export class TemplatesModule { }
