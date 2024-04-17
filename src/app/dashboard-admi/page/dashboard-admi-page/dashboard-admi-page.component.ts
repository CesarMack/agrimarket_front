import { Component, OnInit } from '@angular/core';
import { AdmiService } from '../../services/admi.service';
import { Dashboard } from '../../interfaces/dashboard';
import { Suggestions } from '../../interfaces/suggestions';
import { Chart } from 'chart.js/auto';
import { Cards } from '../../interfaces/cards';
import { Router } from '@angular/router';
import { Days } from '../../interfaces/days';

@Component({
  selector: 'app-dashboard-admi-page',
  templateUrl: './dashboard-admi-page.component.html',
})
export class DashboardAdmiPageComponent implements OnInit {
  dashboardData: Dashboard | undefined;
  days: Days | undefined;
  public dataCard: Cards | undefined;
  public chart!: Chart;
  public completeOrders!: string;
  public canceledOrders!: string;
  public activeProducts!: string;
  public pendingOrders!: string;

  public admins!: string;
  public clients!: string;
  public farmers!: string;
  public usuariosTotales!: string;

  constructor(private admiService: AdmiService, private router: Router) {}

  ngOnInit(): void {
    this.admiService.getDashboardCard().subscribe((response) => {
      /*
      console.log('Respuesta Card');
      console.log(response); */ /*
      this.dataCard = response;
      this.activeProducts = response.data.active_products.toString();
      this.completeOrders = response.data.new_users.toString();
      this.pendingOrders = response.data.total_users.toString();
      this.canceledOrders = response.data.total_orders.toString(); */

      this.usuariosTotales = response.data.total.toString();
      this.admins = response.data.admins.toString();
      this.clients = response.data.clients.toString();
      this.farmers = response.data.farmers.toString();

      // Inicializar gráficas con datos predeterminados
      this.initializeCharts();
    });

    this.admiService.getDashboardDays().subscribe(
      (response) => {
        /*
        console.log(response);
        this.days = response; */
        this.initializeCharts();
      },
      (error) => {
        /*
        console.log(error); */
      }
    );
  }

  initializeCharts() {
    // Obtén las etiquetas y datos desde tu JSON
    const labels = Object.keys(this.days!);
    const dataValues = Object.values(this.days!);

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

  daysFilter() {
    this.admiService.getDashboardDays().subscribe(
      (response) => {
        /*
        console.log(response); */
        // Obtén las etiquetas y datos desde tu JSON
        const days = Object.keys(response);
        const dataValues = Object.values(response);

        const newData = {
          labels: days,
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
      },
      (error) => {
        /*
        console.log(error); */
      }
    );
  }

  monthFilter() {
    this.admiService.getDashboardMonths().subscribe(
      (response) => {
        /*
        console.log(response); */
        // Obtén las etiquetas y datos desde tu JSON
        const month = Object.keys(response);
        const dataValues = Object.values(response);

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
      },
      (error) => {
        /*
        console.log(error); */
      }
    );
  }

  weeksFilter() {
    this.admiService.getDashboardWeeks().subscribe(
      (response) => {
        /*
        console.log(response); */
        // Obtén las etiquetas y datos desde tu JSON
        const weeks = Object.keys(response);
        const dataValues = Object.values(response);

        const newData = {
          labels: weeks,
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
      },
      (error) => {
        /*
        console.log(error); */
      }
    );
  } // Método para redirigir a la página de detalles del producto
  redirectToDetails(id: string) {
    // Utiliza el servicio Router para navegar a la nueva ventana
    this.router.navigate(['/farmer/orders/details/', id]);
  }
}
