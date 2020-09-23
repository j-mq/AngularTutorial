import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
//Decorator: metadata for the component
//selector: html tag where the component will be rendered, gets also added with the cli
//templateUrl: html template
//styleUrl: styles
export class AppComponent {
  name: string = 'MyName';
  //Property that can be used in the html with {{}} Pipes can be used along them for some functionality

  constructor() {
    //Runs on initialization
    //Used to import services
  }
}
