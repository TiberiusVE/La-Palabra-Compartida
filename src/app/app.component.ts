import { Component } from '@angular/core';

@Component({
  selector: 'content',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class Content {

  public openMobile: boolean;
  public navbarList = [
    {name: 'La Nación Intelectual', content: ['Arturo Uslar Pietri', 'Tomás Polanco Alcántara', 'Alirio Ugarte Pelayo'], img: './assets/images/banners/banner_uslar.png', open: false},
    {name: 'Podcast', content: ['Overview', 'La Palabra Compartida'], img: './assets/images/banners/banner_renny.png', open:false},
    {name: 'Editorial', content: ['Opinión', 'Entrevistas', 'Glosario'], img: './assets/images/banners/banner_diogenes_medina.png', open: false},
    {name: 'Acerca de', content: ['La Marca', 'Metodología', 'Derechos de autor', 'Donaciones', 'Nuestro Equipo', 'Medios de contacto'], img: './assets/images/banners/banner_majestic2.png', open:false}
  ];

  mobileMenu(event){
    this.openMobile = this.openMobile != event ? event : !event;
  }
  

}
