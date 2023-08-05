import { Component } from '@angular/core';

@Component({
  selector: 'app-details-product-page',
  templateUrl: './details-product-page.component.html',
  styleUrls: ['./details-product-page.component.css'],
})
export class DetailsProductPageComponent {
  imageUrl: string | ArrayBuffer | null = null;

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
