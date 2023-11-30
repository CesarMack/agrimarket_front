import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../../services/main.service';
import { Product } from '../../interfaces/product';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-market-order',
  templateUrl: './market-order.component.html',
})
export class MarketOrderComponent implements OnInit {
  productData: Product | undefined;
  selectedPhotoUrl: string = '../assets/vegetables.jpg';
  price: string | null = '0';
  quantity: string | null = '0';
  total: string | null = '0';
  profileForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private mainService: MainService,
    private formBuilder: FormBuilder,
    private profileService: ProfileService
  ) {
    this.profileForm = this.formBuilder.group({
      name: { value: '', disabled: true },
      last_name: { value: '', disabled: true },
      email: { value: '', disabled: true },
      phone: { value: '', disabled: true },
      street: { value: '', disabled: true },
      ext_num: { value: '', disabled: true },
      int_num: { value: '', disabled: true },
      suburb: { value: '', disabled: true },
      city: { value: '', disabled: true },
      state: { value: '', disabled: true },
      zip_code: { value: '', disabled: true },
    });
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.mainService.getProductData(params['id']).subscribe(
          (response) => {
            this.productData = response;
            this.selectedPhotoUrl = response.data.photos[0].url;

            this.price = response.data.price;
            this.quantity = localStorage.getItem('quantity');

            console.log(this.selectedPhotoUrl);

            const quantityNumeric = parseFloat(this.quantity!);
            const priceNumeric = parseFloat(this.productData.data.price);
            this.total = (quantityNumeric * priceNumeric).toString();
          },
          (error) => {
            console.log('Error fetching DATA', error);
          }
        );
      }
    });

    this.profileService.getDataProfile().subscribe(
      (data) => {
        this.profileForm.patchValue({
          name: data.data.first_name,
          last_name: data.data.last_name,
          email: data.data.email,
          phone: data.data.phone,
          street: data.data.street,
          ext_num: data.data.ext_num,
          int_num: data.data.int_num,
          suburb: data.data.suburb,
          city: data.data.city,
          state: data.data.state,
          zip_code: data.data.zip_code,
          // ...otros campos aquí...
        });
      },
      (error) => {
        console.error('Error fetching dashboard data:', error);
      }
    );
  }
}
