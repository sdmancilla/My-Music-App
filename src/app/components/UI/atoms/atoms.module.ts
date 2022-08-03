import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ImgComponent } from './img/img.component';
import { TextComponent } from './text/text.component';
import { TitleComponent } from './title/title.component';
import { LinkComponent } from './link/link.component';


@NgModule({
  declarations: [
    ImgComponent,
    TextComponent,
    TitleComponent,
    LinkComponent,
  ],
  exports: [
    ImgComponent,
    TextComponent,
    TitleComponent,
    LinkComponent,
  ]
})
export class AtomsModule { }