import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-genres",
  templateUrl: "./genres.component.html",
  styleUrls: ["./genres.component.scss"]
})
export class GenresComponent implements OnInit {
  @Input("genres") genres;
  constructor() {}

  ngOnInit() {}
}
