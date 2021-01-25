import { Component, OnInit } from '@angular/core';
import { SMALLARTICLE, ARTICLEPARAGRAPH } from '../data-directory';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.less']
})
export class ArticlePageComponent implements OnInit {
  // a : template article
  // p : template paragraph
  a = SMALLARTICLE[0];
  p = ARTICLEPARAGRAPH[0];
  tenCount = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  constructor() { }

  ngOnInit(): void {
  }

}
