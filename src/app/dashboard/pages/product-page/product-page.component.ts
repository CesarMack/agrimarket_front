import { Component, OnInit } from '@angular/core';
import { FarmerService } from '../../services/farmer.service';
import { Catalog } from '../../interfaces/catalog';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  catalogData: Catalog | undefined;
  constructor(private farmerService: FarmerService) {}
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
  }
}
