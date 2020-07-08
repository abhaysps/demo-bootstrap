import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { categories } from './categories.mock';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categories: any[] = categories;
  isCollapsed = false;
  @Output() toggle = new EventEmitter();
  constructor() { }

  ngOnInit() {
    
  }

  toggleMenu(){
    this.isCollapsed = !this.isCollapsed;
  }

  selectView(name) {
    this.toggle.emit(name);
  }

}