import { BrowserModule } from '@angular/platform-browser';
import { ClickOutsideModule } from 'ng-click-outside';
import { NgModule } from '@angular/core';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';


import { Content } from './app.component';
import { Menu } from './components/menu/menu.component';
import { Header } from './components/header/header.component';
import { Article } from './components/article/article.component';
import { Logo } from './components/logo/logo.component';
import { MenuMobile } from './components/menu-mobile/menu-mobile.component';
import { DescriptionComponent } from './components/description/description/description.component';
import { SliderComponent } from './components/slider/slider/slider.component';
import { PodcastComponent } from './components/podcast/podcast/podcast.component'

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  spaceBetween: 10,
  slidesPerView: 1
};

@NgModule({
  declarations: [
    Content,
    Menu,
    Header,
    Article,
    Logo,
    MenuMobile,
    DescriptionComponent,
    SliderComponent,
    PodcastComponent
  ],
  imports: [
    BrowserModule, ClickOutsideModule, SwiperModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [Content]
})
export class AppModule { }
