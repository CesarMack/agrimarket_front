import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Catalog } from '../../interfaces/catalog';
import { MainService } from '../../services/main.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-market-page',
  templateUrl: './market-page.component.html',
})
export class MarketPageComponent implements OnInit {
  catalog: Catalog | undefined;
  searchForm: FormGroup;
  loading: boolean = true;
  constructor(
    private router: Router,
    private mainService: MainService,
    private formBuilder: FormBuilder
  ) {
    this.searchForm = this.formBuilder.group({
      search: '',
    });
  }
  ngOnInit(): void {
    this.mainService.getDashboard().subscribe(
      (response) => {
        this.catalog = response;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        /*
        console.log('Error with catalog', error); */
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
  searchProduct(): void {
    this.loading = true;

    const search = this.searchForm.get('search')!.value;

    this.mainService.getProductByName(search).subscribe(
      (response) => {
        this.catalog = response;
        this.loading = false;
      },
      (error) => {
        /*
        console.log('Error with catalog', error); */
      }
    );
  }
}
