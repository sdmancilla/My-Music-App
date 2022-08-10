import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FavoritesComponent } from "./components/pages/favorites/favorites.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { LandingComponent } from "./components/pages/landing/landing.component";

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    { path: 'landing', component: LandingComponent, pathMatch: 'full' },
    { path: 'favorites', component: FavoritesComponent, pathMatch:'full' },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}