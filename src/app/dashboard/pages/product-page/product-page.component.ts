import { Component, OnInit } from '@angular/core';
import { FarmerService } from '../../services/farmer.service';
import { Catalog } from '../../interfaces/catalog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  catalogData: Catalog | undefined;
  constructor(private farmerService: FarmerService, private router: Router) {}
  ngOnInit(): void {
    this.farmerService.getCatalog().subscribe(
      (data) => {
        console.log(data);

        console.log(data.data);

        this.catalogData = data;
      },
      (error) => {
        console.error('Error fetching dashboard data:', error);
      }
    );
  } // Método para redirigir a la página de detalles del producto
  redirectToProductDetail(productId: string) {
    // Utiliza el servicio Router para navegar a la nueva ventana
    this.router.navigate(['/farmer/products/details', productId]);
  }
}
