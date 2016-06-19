/*
 * Angular 2 decorators and services
 */
import { Component, OnInit } from '@angular/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  styles: [
    require('./app.css')
  ],
  template: require('./app.component.html')
})
export class App implements OnInit{
  url: string = 'https://www.ambient-it.net/';
  
  constructor() {}

  ngOnInit() {
    console.log('App started');
  }

}
