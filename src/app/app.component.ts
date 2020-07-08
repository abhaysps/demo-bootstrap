import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  type = '';

  showView(value) {
    console.log('VALUE IN HEAD : ', value)
    if (value === 'Home') {
      this.type = 'home';
    } else if (value === 'Stand out of Queue') {
      this.type = 'stand';
    } else if (value === 'Who am I') {
      this.type = 'who';
    } else if (value === 'About'){
      this.type = 'about';
    } else if (value === 'Accordion Collapsable') {
      this.type = 'accordion';
      console.log('Accordion selected')
    }
  }
}
