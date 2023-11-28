import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Catalog } from '../../interfaces/catalog';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-market-page',
  templateUrl: './market-page.component.html',
  styleUrls: ['./market-page.component.css'],
})
export class MarketPageComponent implements OnInit {
  catalog: Catalog | undefined;
  constructor(private router: Router, private mainService: MainService) {}
  ngOnInit(): void {
    this.mainService.getDashboard().subscribe(
      (response) => {
        this.catalog = response;
      },
      (error) => {
        console.log('Error with catalog', error);
      }
    );
  }
  // Método para redirigir a la página de detalles del producto
  redirectToProductDetail(productId: string) {
    // Utiliza el servicio Router para navegar a la nueva ventana
    this.router.navigate(['/store', productId]);
  }
  navigateToAbout() {
    // Cambiar la ruta al componente 'Acerca de'
    this.router.navigate(['/details']);
  }
}
