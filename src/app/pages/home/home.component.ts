import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: any  = [];

  constructor(private moviesService : MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((response: any)=>{

        // get the data from the api 
        this.movies = response.results;
        console.log(response);






    })
  }

}
