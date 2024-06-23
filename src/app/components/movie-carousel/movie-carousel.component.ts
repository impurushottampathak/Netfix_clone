import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, inject } from '@angular/core';
import Swiper from 'swiper';
import { IMovieDetails } from '../../shared/models/movie-details.model';
import { MovieService } from '../../services/movie.service';
import { DescriptionPipe } from '../../shared/pipes/description.pipe';
import { ImagePipe } from '../../shared/pipes/image.pipe';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-movie-carousel',
  standalone: true,
  imports: [CommonModule,DescriptionPipe,ImagePipe],
  templateUrl: './movie-carousel.component.html',
  styleUrl: './movie-carousel.component.scss',
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class MovieCarouselComponent implements OnInit,AfterViewInit{
@ViewChild('swiperContainer') swiperContainer!:ElementRef
@Input() videoContent:IMovieDetails[]=[];
@Input() title!:string;
movieService = inject(MovieService)
selectedContent:string|null = null;
ngOnInit(): void {
}

ngAfterViewInit(): void {
  this.initialiseSwiper()
}
private initialiseSwiper(){
  return new Swiper(this.swiperContainer.nativeElement, {
    slidesPerView: 3,
    slidesPerGroup: 2,
    centeredSlides: true,
    loop: true,
    breakpoints: {
      600: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 5,
        centeredSlides: true,
      },
      900: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 5,
        centeredSlides: true,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 5,
        centeredSlides: false,
      },
      1500: {
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 5,
        centeredSlides: false,
      },
      1800: {
        slidesPerView: 5,
        slidesPerGroup: 6,
        spaceBetween: 5,
        centeredSlides: false,
      }
    }
  })
}

setHoverMovie(movie:IMovieDetails){
 this.selectedContent = movie.title ?? movie.name;
}

clearHoverMovie(){
  this.selectedContent = null
}
}
