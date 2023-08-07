import { Component, OnInit } from '@angular/core';
import { Dashboard } from '../../interfaces/dashboard';
import { FarmerService } from '../../services/farmer.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
})
export class DashboardPageComponent implements OnInit {
  dashboardData: Dashboard | undefined;
  constructor(private farmerService: FarmerService) {}
  ngOnInit(): void {
    this.farmerService.getDashboard().subscribe(
      (data) => {
        this.dashboardData = data;
      },
      (error) => {
        console.error('Error fetching dashboard data:', error);
      }
    );
  }
}
