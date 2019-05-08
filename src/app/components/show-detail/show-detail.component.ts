import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ShowService } from "./../../services/show.service";

@Component({
  selector: "app-show-detail",
  templateUrl: "./show-detail.component.html",
  styleUrls: ["./show-detail.component.scss"]
})
export class ShowDetailComponent implements OnInit {
  show: any;
  showId: string;
  isloading: boolean = true;
  constructor(private showService: ShowService, private route: ActivatedRoute) {
    this.showId = this.route.snapshot.params.id;
    this.showService.getShow(this.showId).subscribe(item => {
      this.isloading = false;
      this.show = item;
      console.log(this.show);
    });
  }

  ngOnInit() {}
}
