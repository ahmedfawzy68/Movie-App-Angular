import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trendingMovies:any[] = [];
  trendingTv:any[] = [];
  trendingPeople:any[] = [];
  posterPath:string = "https://image.tmdb.org/t/p/w500";
  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {

    this._MoviesService.getTrending('movies').subscribe((resp)=>{
      this.trendingMovies = resp.results.slice(0,10);
    })
    
    this._MoviesService.getTrending('tv').subscribe((resp)=>{
      this.trendingTv = resp.results.slice(0,10);
    })
    
  }


}
