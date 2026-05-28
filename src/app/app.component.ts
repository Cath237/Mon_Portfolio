import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit() {

    const home = document.getElementById('home');

    if (home) {
      home.scrollIntoView({ behavior: 'smooth' });
    }

  }
}