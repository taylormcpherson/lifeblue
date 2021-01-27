import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-secondary-content',
  templateUrl: './secondary-content.component.html',
  styleUrls: ['./secondary-content.component.less']
})
export class SecondaryContentComponent implements OnInit {
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
