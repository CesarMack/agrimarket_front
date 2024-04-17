import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  collapseShow = 'hidden';
  user: boolean | null = false;
  ngOnInit(): void {
    const userRole = localStorage.getItem('user_role');
    if (userRole === 'client') {
      this.user = true; // Set user to true if user_role is 'cliente'
    } else {
      this.user = false; // Set user to false for other roles or when user_role is not set
    } /*
    console.log(this.user); */
  }

  openMenu(classes: any) {
    this.collapseShow = classes;
  }
}
