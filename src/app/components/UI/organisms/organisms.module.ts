import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AtomsModule } from "../atoms/atoms.module";

import { MoleculesModule } from "../molecules/molecules.module";

import { CardComponent } from './card/card.component';

@NgModule({
    declarations: [
        CardComponent,
  ],
    imports: [
        BrowserModule,
        MoleculesModule,
        AtomsModule
    ],
    exports: [
        CardComponent
    ]
})
export class OrganismsModule { }
