import { Component, OnInit } from '@angular/core';
import { AdmiService } from '../../services/admi.service';
import { DataDashboard } from '../../interfaces/dashboard';
import { Suggestions } from '../../interfaces/suggestions';

@Component({
  selector: 'app-dashboard-admi-page',
  templateUrl: './dashboard-admi-page.component.html',
  styleUrls: ['./dashboard-admi-page.component.css'],
})
export class DashboardAdmiPageComponent implements OnInit {
  dashboardData: DataDashboard | undefined;
  constructor(private admiService: AdmiService) {}

  ngOnInit(): void {
    this.admiService.getDashboard().subscribe(
      (data) => {
        this.dashboardData = {
          admins: data.data.admins,
          clients: data.data.clients,
          farmers: data.data.farmers,
        };
      },
      (error) => {
        console.error('Error fetching dashboard data:', error);
      }
    );
  }
}
