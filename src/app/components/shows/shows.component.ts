import { Component, OnInit } from "@angular/core";
import { ShowService } from "./../../services/show.service";

@Component({
  selector: "app-shows",
  templateUrl: "./shows.component.html",
  styleUrls: ["./shows.component.scss"]
})
export class ShowsComponent implements OnInit {
  shows;
  isloading: boolean = true;
  constructor(private showService: ShowService) {}

  ngOnInit() {
    this.showService.getShows().subscribe(items => {
      this.isloading = false;
      this.shows = items;
    });
  }
}
