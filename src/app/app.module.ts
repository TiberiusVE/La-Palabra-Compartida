import { BrowserModule } from '@angular/platform-browser';
import { ClickOutsideModule } from 'ng-click-outside';
import { NgModule } from '@angular/core';


import { Content } from './app.component';
import { Menu } from './components/menu/menu.component';
import { Header } from './components/header/header.component';
import { Article } from './components/article/article.component';
import { Logo } from './components/logo/logo.component';
import { Toggle } from './components/toggle/toggle.component';
import { MenuMobile } from './components/menu-mobile/menu-mobile.component';

@NgModule({
  declarations: [
    Content,
    Menu,
    Header,
    Article,
    Logo,
    Toggle,
    MenuMobile
  ],
  imports: [
    BrowserModule, ClickOutsideModule
  ],
  providers: [],
  bootstrap: [Content]
})
export class AppModule { }
