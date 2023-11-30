import { Component, OnInit } from '@angular/core';
import { AdmiService } from '../../services/admi.service';
import { Dashboard } from '../../interfaces/dashboard';
import { Suggestions } from '../../interfaces/suggestions';
import { Chart } from 'chart.js/auto';
import { Cards } from '../../interfaces/cards';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-admi-page',
  templateUrl: './dashboard-admi-page.component.html',
})
export class DashboardAdmiPageComponent implements OnInit {
  dashboardData: Dashboard | undefined;
  public dataCard: Cards | undefined;
  public chart!: Chart;
  public completeOrders!: string;
  public canceledOrders!: string;
  public activeProducts!: string;
  public pendingOrders!: string;

  constructor(private admiService: AdmiService, private router: Router) {}


  ngOnInit(): void {
    this.admiService.getDashboardCard().subscribe((response) => {
      console.log('Respuesta Card');
      console.log(response);
      this.dataCard = response;
      this.activeProducts = response.data.active_products.toString();
      this.completeOrders = response.data.new_users.toString();
      this.pendingOrders = response.data.total_users.toString();
      this.canceledOrders = response.data.total_orders.toString();
      // Inicializar gráficas con datos predeterminados
      this.initializeCharts();
    });

    this.admiService.getDashboardCharts().subscribe((response) => {
      console.log('Respuesta Card');
      console.log(response);
      this.dataCard = response;
      // Inicializar gráficas con datos predeterminados
      this.initializeCharts();
    });

    this.admiService.getDashboardDays().subscribe((response)=>{
      console.log(response);
      
    }, (error)=>{
      console.log(error);
      
    })
  }

  initializeCharts() {
    // Obtén las etiquetas y datos desde tu JSON
    const three_months = Object.keys(this.dataCard?.data.orders_three_months!);
    const dataValues = Object.values(this.dataCard?.data.orders_three_months!);
    const labels = three_months;
    const initialData = {
      labels: labels,
      datasets: [
        {
          backgroundColor: '#4c51bf',
          label: 'Órdenes',
          data: dataValues,
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
  }

  updateChartData(newData: any) {
    // Actualizar data de gráficas y volver a renderizar
    this.chart.data = newData;
    this.chart.update();
  }

  weekFilter() {
    this.admiService.getDashboardDays().subscribe((response)=>{
      console.log(response);
      
    }, (error)=>{
      console.log(error);
      
    })
    // Obtén las etiquetas y datos desde tu JSON
    const week = Object.keys(this.dataCard?.data.orders_last_week!);
    const dataValues = Object.values(this.dataCard?.data.orders_last_week!);
    // Lógica de filtrado por semana


    const newData = {
      labels: week,
      datasets: [
        {
          backgroundColor: '#4c51bf',
          label: 'Órdenes',
          data: dataValues,
          fill: false,
          borderColor: '#4c51bf',
          tension: 0.1,
        },
      ],
    };

    this.updateChartData(newData);
  }

  monthFilter() {

    // Obtén las etiquetas y datos desde tu JSON
    const month = Object.keys(this.dataCard?.data.orders_last_month!);
    const dataValues = Object.values(this.dataCard?.data.orders_last_month!);
    // Lógica de filtrado por mes
    const newData = {
      labels: month,
      datasets: [
        {
          backgroundColor: '#4c51bf',
          label: 'Órdenes',
          data: dataValues,
          fill: false,
          borderColor: '#4c51bf',
          tension: 0.1,
        },
      ],
    };

    this.updateChartData(newData);
  }

  yearFilter() {
    // Obtén las etiquetas y datos desde tu JSON
    const months = Object.keys(this.dataCard?.data.orders_last_six_months!);
    const dataValues = Object.values(
      this.dataCard?.data.orders_last_six_months!
    );

    // Lógica de filtrado por año
    const newData = {
      labels: months,
      datasets: [
        {
          backgroundColor: '#4c51bf',
          label: 'Órdenes',
          data: dataValues,
          fill: false,
          borderColor: '#4c51bf',
          tension: 0.1,
        },
      ],
    };

    this.updateChartData(newData);
  } // Método para redirigir a la página de detalles del producto
  redirectToDetails(id: string) {
    // Utiliza el servicio Router para navegar a la nueva ventana
    this.router.navigate(['/farmer/orders/details/', id]);
  }
}
