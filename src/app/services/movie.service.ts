import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getAllMovies() {
    return this.http.get<any[]>("https://tv-v2.api-fetch.website/movies/1");
  }

  getMovie(id) {
    return this.http.get(`https://tv-v2.api-fetch.website/movie/${id}`);
  }
}
