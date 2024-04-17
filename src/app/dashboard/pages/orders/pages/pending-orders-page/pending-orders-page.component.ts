import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Orders } from 'src/app/dashboard/interfaces/orders';
import { FarmerService } from 'src/app/dashboard/services/farmer.service';

@Component({
  selector: 'app-pending-orders-page',
  templateUrl: './pending-orders-page.component.html',
})
export class PendingOrdersPageComponent {
  ordersData: Orders | undefined;
  loading: boolean = true;

  constructor(
    private farmerService: FarmerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.farmerService.getStatusOrder('Pendiente').subscribe(
      (response) => {
        /*
        console.log(response); */

        this.ordersData = response;
        this.loading = false;
      },
      (error) => {
        /*
        console.log(error); */
        this.loading = false;
      }
    );
  }

  // Método para redirigir a la página de detalles del producto
  redirectToDetails(id: string) {
    // Utiliza el servicio Router para navegar a la nueva ventana
    this.router.navigate(['/farmer/orders/details/', id]);
  }
}
