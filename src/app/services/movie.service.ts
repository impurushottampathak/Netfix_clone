import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

const options = {
  params:{
    include_adult: 'false',
    include_video: 'true',
    api_key: "5b5e5d99b13596d239dec80fff5e550e",
    append_to_response:"videos,images"
  }  ,
  headers:{
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjVlNWQ5OWIxMzU5NmQyMzlkZWM4MGZmZjVlNTUwZSIsIm5iZiI6MTcxOTEyOTU1OC4yNDI2MTIsInN1YiI6IjY2NzMwZGNkM2YwMzFiMmZjODU5ZTBiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q2B2tiq3I9VTxHZMwUt4kOgh0fV_lGlHqB6SO2b5GTs'
  }
}
@Injectable({
  providedIn: 'root'
})

export class MovieService {
  constructor() { }
  http = inject(HttpClient)
  getMovies(){
    return this.http.get<any>(`https://api.themoviedb.org/3/discover/movie`,options)
  }
  getTvShows() {
    return this.http.get<any>('https://api.themoviedb.org/3/discover/tv', options)
  }

  getBannerImage(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/images`, options)
  }

  getBannerVideo(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos`, options);
  }
  getBannerDetail(id: number) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}`, options);
  }

  getNowPlayingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing', options)
  }

  getPopularMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/popular', options)
  }

  getTopRated() {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated', options)
  }

  getUpcomingMovies() {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming', options)
  }
}
