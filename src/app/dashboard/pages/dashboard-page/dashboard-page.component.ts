import { Component, OnInit } from '@angular/core';
import { Dashboard } from '../../interfaces/dashboard';
import { FarmerService } from '../../services/farmer.service';
import { Chart } from 'chart.js/auto';
import { Cards } from '../../interfaces/cards';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent implements OnInit {
  public dataCard: Cards | undefined;
  public chart!: Chart;
  public completeOrders!: string;
  public canceledOrders!: string;
  public activeProducts!: string;
  public pendingOrders!: string;

  dashboardData: Dashboard | undefined;

  constructor(private farmerService: FarmerService, private router: Router) {}

  ngOnInit(): void {
    this.farmerService.getDashboardCard().subscribe((response) => {
      console.log(response);

      /*
      console.log('Respuesta CArd');
      console.log(response); */
      this.dataCard = response;
      this.activeProducts = response.data.products.toString();
      this.completeOrders = response.data.completed_orders.toString();
      // Verificar si response.data.pending está vacío
      if (!response.data.pending) {
        this.pendingOrders = '0'; // Si está vacío, establecerlo en "0"
      } else {
        this.pendingOrders = response.data.pending.toString(); // Si no está vacío, asignar su valor
      }

      // Verificar si response.data.canceled está vacío
      if (!response.data.canceled) {
        this.canceledOrders = '0'; // Si está vacío, establecerlo en "0"
      } else {
        this.canceledOrders = response.data.canceled.toString(); // Si no está vacío, asignar su valor
      }
      // Inicializar gráficas con datos predeterminados
      /*   this.initializeCharts(); */
    });
  }
  /*
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
    this.completeOrders = this.dataCard?.data.completed_orders.week.toString()!;
    this.pendingOrders = this.dataCard?.data.pending_orders.week.toString()!;
    this.canceledOrders = this.dataCard?.data.canceled_orders.week.toString()!;
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
    this.completeOrders =
      this.dataCard?.data.completed_orders.month.toString()!;
    this.pendingOrders = this.dataCard?.data.pending_orders.month.toString()!;
    this.canceledOrders = this.dataCard?.data.canceled_orders.month.toString()!;
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
    this.completeOrders =
      this.dataCard?.data.completed_orders.six_months.toString()!;
    this.pendingOrders =
      this.dataCard?.data.pending_orders.six_months.toString()!;
    this.canceledOrders =
      this.dataCard?.data.canceled_orders.six_months.toString()!;
  } */ // Método para redirigir a la página de detalles del producto
  redirectToDetails(id: string) {
    // Utiliza el servicio Router para navegar a la nueva ventana
    this.router.navigate(['/farmer/orders/details/', id]);
  }
}
