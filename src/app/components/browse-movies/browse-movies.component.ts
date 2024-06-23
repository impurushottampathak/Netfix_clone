import { Component, OnInit, inject } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { IMovieDetails } from '../../shared/models/movie-details.model';
import { MovieCarouselComponent } from '../movie-carousel/movie-carousel.component';
import { Observable, forkJoin, map } from 'rxjs';
import { BannerComponent } from '../banner/banner.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-browse-movies',
  standalone: true,
  imports: [CommonModule,MovieCarouselComponent,BannerComponent],
  templateUrl: './browse-movies.component.html',
  styleUrl: './browse-movies.component.scss'
})
export class BrowseMoviesComponent implements OnInit{
  movieService = inject(MovieService)
  movies:IMovieDetails[]=[];
  popularMovies:IMovieDetails[]=[];
  tvShows: IMovieDetails[] = [];
  ratedMovies: IMovieDetails[] = [];
  nowPlayingMovies: IMovieDetails[] = [];
  topRatedMovies: IMovieDetails[] = [];
  upcomingMovies: IMovieDetails[] = [];
  bannerDetails$ = new Observable<any>();
  bannerVideo$ = new Observable<any>();  

  sources = [
    this.movieService.getMovies(),
    this.movieService.getTvShows(),
    this.movieService.getUpcomingMovies(),
    this.movieService.getNowPlayingMovies(),
    this.movieService.getPopularMovies(),
    this.movieService.getTopRated(),
  ]
  ngOnInit(): void {
    forkJoin(this.sources).pipe(map(([movies, tvShows, nowPlayingMovies, upcomingMovies, popularMovies, topRatedMovies])=>{
      this.bannerDetails$ = this.movieService.getBannerDetail(movies.results[0].id);
      this.bannerVideo$ = this.movieService.getBannerVideo(movies.results[0].id)
      return {movies, tvShows, nowPlayingMovies, upcomingMovies, popularMovies, topRatedMovies}
    })).subscribe((res:any)=>{
      this.movies = res.movies.results as IMovieDetails[];
      this.tvShows = res.tvShows.results as IMovieDetails[];
      this.nowPlayingMovies = res.nowPlayingMovies.results as IMovieDetails[];
      this.upcomingMovies = res.upcomingMovies.results as IMovieDetails[];
      this.popularMovies = res.popularMovies.results as IMovieDetails[];
      this.topRatedMovies = res.topRatedMovies.results as IMovieDetails[];
      this.getMovieKey();
      console.log(this.tvShows);
      
    })
  }
  getMovieKey() {
    this.movieService.getBannerVideo(this.movies[0].id)
    .subscribe(res=>{
      console.log(res);
    })
  }
}
