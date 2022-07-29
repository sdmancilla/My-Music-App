import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ImgComponent } from './img/img.component';
import { TextComponent } from './text/text.component';
import { TitleComponent } from './title/title.component';
import { Title2Component } from './title2/title2.component';
import { Title3Component } from './title3/title3.component';


@NgModule({
  declarations: [
    ImgComponent,
    TextComponent,
    TitleComponent,
    Title2Component,
    Title3Component
  ],
  exports: [

  ]
})
export class AtomsModule { }