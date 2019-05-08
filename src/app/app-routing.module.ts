import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { ShowsComponent } from "./components/shows/shows.component";
import { MovieDetailComponent } from "./components/movie-detail/movie-detail.component";
import { MoviesComponent } from "./components/movies/movies.component";
import { ShowDetailComponent } from "./components/show-detail/show-detail.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

const routes: Routes = [
  { path: "", redirectTo: "/movies", pathMatch: "full" },
  { path: "movies", component: MoviesComponent },
  { path: "movies/:id", component: MovieDetailComponent },
  { path: "shows", component: ShowsComponent },
  { path: "shows/:id", component: ShowDetailComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
