import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { OrganismsModule } from '../organisms/organisms.module';
import { MainLandingComponent } from './main-landing/main-landing.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { HeaderLandingComponent } from './header-landing/header-landing.component';
import { MoleculesModule } from '../molecules/molecules.module';
import { AtomsModule } from '../atoms/atoms.module';



@NgModule({
  declarations: [
    MainLandingComponent,
    MainComponent,
    HeaderComponent,
    HeaderLandingComponent
  ],
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule,
    OrganismsModule,
    RouterModule
  ],
  exports: [
    MainLandingComponent,
    MainComponent,
    HeaderComponent,
    HeaderLandingComponent
  ]
})
export class TemplatesModule { }
