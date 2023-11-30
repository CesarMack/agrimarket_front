import { Component, OnInit } from '@angular/core';
import { Dashboard } from '../../interfaces/dashboard';
import { FarmerService } from '../../services/farmer.service';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent implements OnInit {
  public chart!: Chart;
  public secondChart!: Chart;
  public completeOrders!: String;
  public canceledOrders!: String;
  public activeProducts!: String;
  public pendingOrders!: String;

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

    // Inicializar gráficas con datos predeterminados
    this.initializeCharts();

    this.activeProducts = "0";
    this.completeOrders = "0";
    this.pendingOrders = "0";
    this.canceledOrders = "0";
  }

  initializeCharts() {
    const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
    const initialData = {
      labels: labels,
      datasets: [
        {
          backgroundColor: '#4c51bf',
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#4c51bf',
          tension: 0.1,
        },
      ],
    };

    // Inicializar gráficas con datos predeterminados
    this.chart = new Chart('chart', {
      type: 'line',
      data: initialData,
    });

    this.secondChart = new Chart('secondChart', {
      type: 'line',
      data: initialData,
    });
  }

  updateChartData(newData: any) {
    // Actualizar data de gráficas y volver a renderizar
    this.chart.data = newData;
    this.chart.update();

    this.secondChart.data = newData;
    this.secondChart.update();
  }

  weekFilter() {
    // Lógica de filtrado por semana
    const newData = {
      labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
      datasets: [
        {
          backgroundColor: '#4c51bf',
          label: 'My First Dataset',
          data: [30, 45, 60, 75],
          fill: false,
          borderColor: '#4c51bf',
          tension: 0.1,
        },
      ],
    };

    this.updateChartData(newData);
    this.completeOrders = "1";
    this.pendingOrders = "1";
    this.canceledOrders = "1";
  }

  monthFilter() {
    // Lógica de filtrado por mes
    const newData = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
      datasets: [
        {
          backgroundColor: '#4c51bf',
          label: 'My First Dataset',
          data: [50, 65, 80, 95, 110],
          fill: false,
          borderColor: '#4c51bf',
          tension: 0.1,
        },
      ],
    };

    this.updateChartData(newData);
    this.completeOrders = "2";
    this.pendingOrders =  "2";
    this.canceledOrders = "2";
  }

  yearFilter() {
    // Lógica de filtrado por año
    const newData = {
      labels: ['2021', '2022', '2023'],
      datasets: [
        {
          backgroundColor: '#4c51bf',
          label: 'My First Dataset',
          data: [100, 120, 140],
          fill: false,
          borderColor: '#4c51bf',
          tension: 0.1,
        },
      ],
    };

    this.updateChartData(newData);
    this.completeOrders = "3";
    this.pendingOrders = "3";
    this.canceledOrders = "3";
  }
}
