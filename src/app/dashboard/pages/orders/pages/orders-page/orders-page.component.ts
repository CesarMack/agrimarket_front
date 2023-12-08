import { Component, OnInit } from '@angular/core';
import { FarmerService } from '../../../../services/farmer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Orders } from 'src/app/dashboard/interfaces/orders';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  providers: [DatePipe],
})
export class OrdersPageComponent implements OnInit {
  ordersData: Orders | undefined;
  loading: boolean = true;

  constructor(
    private farmerService: FarmerService,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.farmerService.getOrders().subscribe(
      (response) => {
        console.log('Ordenes Farmer');
        
        console.log(response);

        this.ordersData = response;
        this.loading = false;
      },
      (error) => {
        console.log(error);
        this.loading = false;
      }
    );
  }

  // Función para formatear la fecha
  formatDate(date: string): string {
    return this.datePipe.transform(date, 'dd/MM/yyyy') || '';
  }

  // Método para redirigir a la página de detalles del producto
  redirectToDetails(id: string) {
    // Utiliza el servicio Router para navegar a la nueva ventana
    this.router.navigate(['/farmer/orders/details/', id]);
  }
}
