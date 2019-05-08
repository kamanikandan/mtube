import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "movie-card",
  templateUrl: "./movie-card.component.html",
  styleUrls: ["./movie-card.component.scss"]
})
export class MovieCardComponent implements OnInit {
  @Input("movie") movie;
  constructor(private router: Router) {}

  ngOnInit() {}

  getCurrentURL() {
    return this.router.url === "/movies" || this.router.url === "/"
      ? "/movies/"
      : "/shows/";
  }
}
