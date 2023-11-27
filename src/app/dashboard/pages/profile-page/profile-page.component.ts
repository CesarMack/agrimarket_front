import { Component, OnInit } from '@angular/core';
import { CPData } from '../../interfaces/cp';
import { ProfileService } from '../../services/profile.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Profile } from '../../interfaces/profile';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {
  cpData: CPData | undefined;
  profileForm: FormGroup;
  profileData: Profile | undefined;
  constructor(
    private profileService: ProfileService,
    private formBuilder: FormBuilder
  ) {
    this.profileForm = this.formBuilder.group({
      name: '',
      last_name: '',
      email: '',
      phone: '',
      street: '',
      ext_num: '',
      int_num: '',
      subur: '',
      city: '',
      state: '',
      zip_code: '',

      ciudad: '',
      estado: '',
      colonia: '',
      // ...otros campos aquí...
    });
  }
  ngOnInit(): void {
    this.profileService.getDataProfile().subscribe(
      (data) => {
        console.log(data);

        this.profileData = data;
        this.profileForm.patchValue({
          name: this.profileData.data.first_name,
          last_name: this.profileData.data.last_name,
          email: this.profileData.data.email,
          phone: this.profileData.data.phone,
          street: this.profileData.data.street,
          ext_num: this.profileData.data.ext_num,
          int_num: this.profileData.data.int_num,
          suburb: this.profileData.data.suburb,
          city: this.profileData.data.city,
          state: this.profileData.data.state,
          zip_code: this.profileData.data.zip_code,
          // ...otros campos aquí...
        });
      },
      (error) => {
        console.error('Error fetching dashboard data:', error);
      }
    );
  }
  imageUrl: string | ArrayBuffer | null = null;

  fetchCPInfo(cp: string) {
    this.profileService.getCPInfo(cp).subscribe(
      (data) => {
        console.log(data);

        this.cpData = data; // Assuming the response structure matches the provided JSON

        this.profileForm.patchValue({
          city: this.cpData.response.ciudad,
          state: this.cpData.response.estado,
          suburb: this.cpData.response.asentamiento[0],
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
