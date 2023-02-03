import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';



@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {

  id:string = '';
  movieDetails:any = {};
  tvDetails:any;
  posterPath:string = "https://image.tmdb.org/t/p/w500";

  constructor(private _MoviesService:MoviesService, private _ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._ActivatedRoute.snapshot.params.id;
    this._MoviesService.getDetails(this.id).subscribe((resp)=>{
      this.movieDetails = resp;
    })
    
  }

}
