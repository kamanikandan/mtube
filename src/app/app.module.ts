import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { MoviesComponent } from "./components/movies/movies.component";
import { ShowsComponent } from "./components/shows/shows.component";
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { GenresComponent } from './components/movie-card/genres/genres.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { ShowDetailComponent } from './components/show-detail/show-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesComponent,
    ShowsComponent,
    MovieCardComponent,
    GenresComponent,
    MovieDetailComponent,
    ShowDetailComponent,
    NotFoundComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
