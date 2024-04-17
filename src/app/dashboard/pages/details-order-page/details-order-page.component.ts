import { Component, OnInit } from '@angular/core';
import { Order } from '../../interfaces/order';
import { FarmerService } from '../../services/farmer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-order-page',
  templateUrl: './details-order-page.component.html',
})
export class DetailsOrderPageComponent implements OnInit {
  orderData: Order | undefined;

  loading: boolean = false; // Variable para controlar la visibilidad del loader
  alert: boolean = true;
  constructor(
    private farmerService: FarmerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loading = true;
    // Obtén el ID del producto de la URL
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.farmerService.getOrder(params['id']).subscribe(
          (response) => {
            /*
            console.log(response);
 */
            this.orderData = response;
            this.loading = false;
          },
          (error) => {
            /*
            console.log(error); */
            this.loading = false;
          }
        );
      }
    });
  }

  closeAlert() {
    this.alert = !this.alert;
  }
  updateStatus(id: string, status: string): void {
    this.loading = true;
    this.farmerService.updateStatusOrder(id, status).subscribe(
      (response) => {
        this.loading = false;
        this.alert = false; // Esperar dos segundos antes de redirigir
        setTimeout(() => {
          this.router.navigate(['/farmer/orders']);
        }, 1000);
      },
      (error) => {
        this.loading = false;
      }
    );
  }
}
