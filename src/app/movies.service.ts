import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }

  getTrending(mediaType:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=3af390c410baead67a2cc7a28784db00`)
  }

  getDetails(id:string): Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=3af390c410baead67a2cc7a28784db00&language=en-US`)
  }
}
