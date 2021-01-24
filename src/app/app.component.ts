import { Component } from '@angular/core';
import { BIGARTICLE } from './data-directory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'The Great Blog';
  bigArticle = BIGARTICLE;
}
