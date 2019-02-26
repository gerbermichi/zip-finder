import {Component, ViewEncapsulation} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'div[id="root"]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'ZIP Finder 1.0';

  constructor(titleService: Title) {
    titleService.setTitle(this.title);
  }
}


