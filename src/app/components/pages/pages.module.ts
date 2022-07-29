import { NgModule } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { TemplatesModule } from "../UI/templates/templates.module";

@NgModule({
    declarations: [
    HomeComponent,
    LandingComponent,
    FavoritesComponent
  ],
    imports: [
        TemplatesModule
    ],
    exports: [
        HomeComponent,
        LandingComponent,
        FavoritesComponent
    ]
})
export class PagesModule { }