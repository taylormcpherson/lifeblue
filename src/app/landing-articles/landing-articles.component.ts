import { Component, OnInit } from '@angular/core';
import { BIGARTICLE, SMALLARTICLE, LANDINGRIGHT, LANDINGMAIN } from '../data-directory';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-landing-articles',
  templateUrl: './landing-articles.component.html',
  styleUrls: ['./landing-articles.component.less']
})
export class LandingArticlesComponent implements OnInit {
  leftArticles = LANDINGMAIN;
  rightArticles = LANDINGRIGHT;
  // fourCount = [4, 3, 2, 1];
  public isSmall: boolean;
  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(max-width: 1100px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isSmall = true;
        } else {
          this.isSmall = false;
        }
      });
  }
}
