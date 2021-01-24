import {Component, Input, OnInit} from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
