import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http : HttpClient) { }


  getMovies() {

   return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=a27d01652ca7eaf683996431e6c28360')

  }




}
