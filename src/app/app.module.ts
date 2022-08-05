import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PagesModule } from './components/pages/pages.module';

import { MoleculesModule } from './components/UI/molecules/molecules.module';
import { OrganismsModule } from './components/UI/organisms/organisms.module';
import { TemplatesModule } from './components/UI/templates/templates.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PagesModule,
    MoleculesModule,
    OrganismsModule,
    TemplatesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
