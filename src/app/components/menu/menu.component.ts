import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.css']
})

export class Menu {
  public toggle: number;
  @Input() navbarList: Array<any>;
  @Output() openMobile = new EventEmitter

  constructor(){}

  subClick(i){ 
    this.toggle = this.toggle !== i ? i : undefined; 
  }

  onClickedOutside() { 
    this.toggle = undefined 
  }

  toggleMobile(v){ 
    this.openMobile.emit(v)
  }

}