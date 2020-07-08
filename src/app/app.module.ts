import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { StandComponent } from './stand/stand.component';
import { AboutComponent } from './about/about.component';
import { AccordionComponent } from './accordion/accordion.component';
import { WhoComponent } from './who/who.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HeaderComponent, HomeComponent, StandComponent, AboutComponent, WhoComponent, AccordionComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
