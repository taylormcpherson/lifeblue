import { Component, OnInit } from '@angular/core';
import { BIGARTICLE, SMALLARTICLE } from '../data-directory';

@Component({
  selector: 'app-landing-articles',
  templateUrl: './landing-articles.component.html',
  styleUrls: ['./landing-articles.component.less']
})
export class LandingArticlesComponent implements OnInit {
  leftArticles = BIGARTICLE;
  rightArticles = SMALLARTICLE;

  constructor() { }

  ngOnInit(): void {
  }

}
