import { Component } from '@angular/core';

@Component({
  selector: 'shared-nav-bar',
  templateUrl: './nav-bar.component.html',
})
export class NavBarComponent {
  collapseShow = 'hidden';
  constructor() {}

  ngOnInit() {}
  toggleCollapseShow(classes: any) {
    this.collapseShow = classes;
  }
}
