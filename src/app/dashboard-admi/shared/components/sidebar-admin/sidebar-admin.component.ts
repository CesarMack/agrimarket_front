import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
})
export class SidebarAdminComponent {
  collapseShow = 'hidden';
  constructor() {}

  ngOnInit() {}
  toggleCollapseShow(classes: any) {
    this.collapseShow = classes;
  }
}
