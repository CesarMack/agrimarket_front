import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../../services/main.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-market-details',
  templateUrl: './market-details.component.html',
})
export class MarketDetailsComponent implements OnInit {
  productData: Product | undefined;
  orderForm: FormGroup;
  selectedPhotoUrl: string = '../assets/vegetables.jpg';
  onSelectPhoto(photoUrl: string) {
    this.selectedPhotoUrl = photoUrl;
  }
  constructor(
    private route: ActivatedRoute,
    private mainService: MainService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.orderForm = this.formBuilder.group({
      quantity: [''],
    });
  }
  ngOnInit(): void {
    //Obtner ID

    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.mainService.getProductData(params['id']).subscribe(
          (response) => {
            this.productData = response;

            this.selectedPhotoUrl = response.data.photos[0].url;
          },
          (error) => {
            console.log('Error fetching DATA', error);
          }
        );
      }
    });
  }

  // Método para redirigir a la página de detalles del producto
  redirectToProductDetail() {
    localStorage.setItem('quantity', this.orderForm.get('quantity')!.value);
    // Utiliza el servicio Router para navegar a la nueva ventana
    this.router.navigate(['/order-details', this.productData?.data.id]);
  }
}
