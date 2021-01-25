import {Component, Input, OnInit} from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-article-container',
  templateUrl: './article-container.component.html',
  styleUrls: ['./article-container.component.less']
})
export class ArticleContainerComponent implements OnInit {
  @Input() isMainArticle: boolean;
  @Input() title: string;
  @Input() date: string;
  @Input() summary: string;
  @Input() img: string;
  @Input() alt: string;
  public isSmall: boolean;
  public superSmall: boolean;
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
    this.breakpointObserver
        .observe(['(max-width: 580px)'])
        .subscribe((state: BreakpointState) => {
          if (state.matches) {
            this.superSmall = true;
          } else {
            this.superSmall = false;
          }
        });
  }

}
