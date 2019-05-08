import { MovieService } from "../../services/movie.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"]
})
export class MoviesComponent implements OnInit {
  movies: any[] = [];
  isloading: boolean = true;

  constructor(private movieService: MovieService) {
    this.movieService.getAllMovies().subscribe(results => {
      this.isloading = false;
      this.movies = results;
    });
  }

  ngOnInit() {}
}
