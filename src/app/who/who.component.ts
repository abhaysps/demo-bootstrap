import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who',
  templateUrl: './who.component.html',
  styleUrls: ['./who.component.css']
})
export class WhoComponent implements OnInit {
  type = ''
  constructor() { }

  ngOnInit() {
  }
  selectType(type) {
    console.log('Type selected : ', type)
    this.type = type;
  }
}