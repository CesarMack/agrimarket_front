import { Component, OnInit } from '@angular/core';
import { AdmiService } from '../../services/admi.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-dashboard-admi-user-info-page',
  templateUrl: './dashboard-admi-user-info-page.component.html',
})
export class DashboardAdmiUserInfoPageComponent implements OnInit {
  userData: User | undefined;
  userRole: string | undefined;

  constructor(private admiService: AdmiService) {}

  ngOnInit(): void {
    this.userRole = localStorage.getItem('user_role')!;
    this.admiService.getUserData().subscribe(
      (data) => {
        this.userData = data;
      },
      (error) => {
        console.error('Error fetching dashboard data:', error);
      }
    );
  }
}
