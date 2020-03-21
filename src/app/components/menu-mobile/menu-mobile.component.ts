import { Component, Input } from '@angular/core';

@Component({
  selector: 'menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.css']
})
export class MenuMobile {

  public toggle: number;
  @Input() navbarList: Array<any>;

  constructor() { }

  openSub(i){
    this.toggle = this.toggle !== i ? i : undefined; 
  }

}
