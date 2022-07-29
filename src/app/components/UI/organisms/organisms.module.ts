import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { MoleculesModule } from "../molecules/molecules.module";

import { HeaderFavoritesComponent } from './header-favorites/header-favorites.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { HeaderLandingComponent } from './header-landing/header-landing.component';
import { CardComponent } from './card/card.component';

@NgModule({
    declarations: [
        HeaderFavoritesComponent,
        HeaderHomeComponent,
        HeaderLandingComponent,
        CardComponent
  ],
    imports: [
        BrowserModule,
        MoleculesModule
    ],
    exports: [
        HeaderFavoritesComponent,
        HeaderHomeComponent,
        HeaderLandingComponent,
        CardComponent
    ]
})
export class OrganismsModule { }
