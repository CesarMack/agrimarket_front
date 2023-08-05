import { Component } from '@angular/core';

@Component({
  selector: 'app-farm-profile',
  templateUrl: './farm-profile.component.html',
  styleUrls: ['./farm-profile.component.css'],
})
export class FarmProfileComponent {
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
