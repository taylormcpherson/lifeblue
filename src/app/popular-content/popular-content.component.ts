import { Component, OnInit } from '@angular/core';
import { MOSTVIEWED, MOSTCOMMENTED, MOSTSHARED} from '../data-directory';

@Component({
  selector: 'app-popular-content',
  templateUrl: './popular-content.component.html',
  styleUrls: ['./popular-content.component.less']
})
export class PopularContentComponent implements OnInit {
  mode: number;
  mostViewed = MOSTVIEWED;
  mostCommented = MOSTCOMMENTED;
  mostShared = MOSTSHARED;

  setMode(x): void {
    this.mode = x;
    // set tab styles
    const viewed = document.getElementById('viewed-tag');       // active when x==0
    const commented = document.getElementById('commented-tag'); // active when x==1
    const shared = document.getElementById('shared-tag');       // active when x==2
    if (x === 0) {
      viewed.setAttribute('style', 'background: #d8dce0; font-weight: 600;');
      commented.setAttribute('style', 'background: #f7f7f7; font-weight: 400;');
      shared.setAttribute('style', 'background: #f7f7f7; font-weight: 400;');
    } else if (x === 1) {
      viewed.setAttribute('style', 'background: #f7f7f7; font-weight: 400;');
      commented.setAttribute('style', 'background: #d8dce0; font-weight: 600;');
      shared.setAttribute('style', 'background: #f7f7f7; font-weight: 400;');
    } else {
      viewed.setAttribute('style', 'background: #f7f7f7; font-weight: 400;');
      commented.setAttribute('style', 'background: #f7f7f7; font-weight: 400;');
      shared.setAttribute('style', 'background: #d8dce0; font-weight: 600;');
    }
  }
  constructor() {
  }

  ngOnInit(): void {
    this.mode = 0;
    this.setMode(0);
  }
}
