import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ShowService {
  constructor(private http: HttpClient) {}

  getShows() {
    return this.http.get("https://tv-v2.api-fetch.website/shows/1");
  }

  getShow(id) {
    return this.http.get(`https://tv-v2.api-fetch.website/show/${id}`);
  }
}
