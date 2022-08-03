import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { MoleculesModule } from "../molecules/molecules.module";

import { CardComponent } from './card/card.component';

@NgModule({
    declarations: [
        CardComponent
  ],
    imports: [
        BrowserModule,
        MoleculesModule
    ],
    exports: [
        CardComponent
    ]
})
export class OrganismsModule { }
