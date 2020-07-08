import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  isOneSelected: boolean;
  clickedClick: boolean;
  tempStore: string;
  selectedDropDown: string;
  constructor() { }

  ngOnInit() {
    this.selectedDropDown = '';
  }

  showDetail(value) {
    this.tempStore = value;
    if (value === 'name') {
      this.selectedDropDown = 'Abhay Sharma';
    } else if (value === 'company') {
      this.selectedDropDown = 'SoftProdigy';
    } else if (value === 'designation') {
      this.selectedDropDown = 'Associate Software Developer';
    } else if (value === 'none') {
      this.selectedDropDown = '';
    }
  }
}