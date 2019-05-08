import { ActivatedRoute } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";
import { Component, OnInit } from "@angular/core";
import { MovieService } from "./../../services/movie.service";

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.scss"]
})
export class MovieDetailComponent implements OnInit {
  movieId: string;
  movie: any;
  youtubeHTML: any;
  movieShow: boolean = false;
  isloading: boolean = true;
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.movieId = this.route.snapshot.params.id;
    this.movieService.getMovie(this.movieId).subscribe(result => {
      this.isloading = false;
      this.movie = result;
      console.log(this.movie);
      let youTubeID = this.movie.trailer.split("=")[1];
      let frame = `<iframe width="500" height="300" src="https://www.youtube.com/embed/${youTubeID}?autoplay=1">
        </iframe>`;
      this.youtubeHTML = this.sanitizer.bypassSecurityTrustHtml(frame);
    });
  }

  showYoutubeVideo() {
    this.movieShow = true;
  }
  hideYoutubeVideo() {
    this.movieShow = false;
  }
}
