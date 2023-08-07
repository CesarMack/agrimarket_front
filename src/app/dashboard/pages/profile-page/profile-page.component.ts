import { Component } from '@angular/core';
import { CPData } from '../../interfaces/profile';
import { ProfileService } from '../../services/profile.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent {
  cpData: CPData | undefined;
  profileForm: FormGroup;
  constructor(
    private profileService: ProfileService,
    private formBuilder: FormBuilder
  ) {
    this.profileForm = this.formBuilder.group({
      ciudad: '',
      estado: '',
      colonia: '',
      // ...otros campos aquí...
    });
  }
  imageUrl: string | ArrayBuffer | null = null;

  fetchCPInfo(cp: string) {
    this.profileService.getCPInfo(cp).subscribe(
      (data) => {
        console.log(data);

        this.cpData = data; // Assuming the response structure matches the provided JSON

        this.profileForm.patchValue({
          ciudad: this.cpData.response.ciudad,
          estado: this.cpData.response.estado,
          colonia: this.cpData.response.asentamiento[0],
          // ...otros campos aquí...
        });
        console.log(this.cpData.response.ciudad);
      },
      (error) => {
        console.error('Error fetching CP data:', error);
      }
    );
  }

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
