import { Component, OnInit } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  public slides = [
    { pretitle: 'Educar para Venezuela', title: 'Arturo Uslar Pietri', imagen: './assets/images/slider/aup1.png' },
    { pretitle: 'La huella de un historiador', title: 'Tomás Polanco Alcántara', imagen: './assets/images/slider/tpa1.png' },
    { pretitle: 'De Barcelona a Caracas', title: 'Pedro Grases', imagen: './assets/images/slider/pg1.png' }
  ];

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    spaceBetween: 50,
    grabCursor: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 25
      }, 
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1140: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    }
  };
}
