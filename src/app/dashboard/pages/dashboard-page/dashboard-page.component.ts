import { Component, OnInit } from '@angular/core';
import { Dashboard } from '../../interfaces/dashboard';
import { FarmerService } from '../../services/farmer.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
})
export class DashboardPageComponent implements OnInit {
  public chart!: Chart;

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

    const labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];
    const data = {
      labels: labels,
      datasets: [{
        backgroundColor: "#4c51bf",
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "#4c51bf",
        tension: 0.1
      }]
    };

    this.chart = new Chart("chart", {
      type: 'line',
      data
    })
  }
}
