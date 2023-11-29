import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
})
export class SidebarAdminComponent {
  isList!: number;
    isMenu: boolean = false;
    isSearch: boolean = false;
  collapseShow = 'hidden';
  constructor() {}

  ngOnInit() {}
  toggleCollapseShow(classes: any) {
    this.collapseShow = classes;
  }
}

