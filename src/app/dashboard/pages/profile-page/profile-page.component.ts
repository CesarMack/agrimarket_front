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
  imageUrl: string | ArrayBuffer | null = null;
  selectedImage: { file: File | null; previewUrl: string | null } = {
    file: null,
    previewUrl: null,
  };
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
      suburb: '',
      city: '',
      state: '',
      zip_code: '',
    });
  }
  ngOnInit(): void {
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

        this.selectedImage = {
          file: null,
          previewUrl: data.data.photo,
        };
        console.log(this.selectedImage);
      },
      (error) => {
        console.error('Error fetching dashboard data:', error);
      }
    );
  }

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

  onFileSelected(event: any): void {
    const files: FileList = event.target.files;

    // Limpiar la imagen seleccionada antes de agregar la nueva
    this.selectedImage = { file: null, previewUrl: null };

    const file: File | null = files.item(0);

    if (file) {
      // Crear una URL de objeto para la vista previa de la imagen
      const reader = new FileReader();
      reader.onload = (e: any) => {
        // Asignar la nueva imagen
        this.selectedImage = { file, previewUrl: e.target.result };
      };
      reader.readAsDataURL(file);
    }
  }

  removeImage(): void {
    // Limpiar la imagen seleccionada
    this.selectedImage = { file: null, previewUrl: null };
  }

  updateInfoUser(): void {
    const formData = new FormData();
    formData.append('first_name', this.profileForm.get('name')!.value);
    formData.append('last_name', this.profileForm.get('last_name')!.value);
    formData.append('phone', this.profileForm.get('phone')!.value);
    formData.append('street', this.profileForm.get('street')!.value);
    formData.append('ext_num', this.profileForm.get('ext_num')!.value);
    formData.append('int_num', this.profileForm.get('int_num')!.value);
    formData.append('suburb', this.profileForm.get('suburb')!.value);
    formData.append('city', this.profileForm.get('city')!.value);
    formData.append('state', this.profileForm.get('state')!.value);
    formData.append('zip_code', this.profileForm.get('zip_code')!.value);
    if (this.selectedImage.file !== null) {
      formData.append('photo', this.selectedImage.file);
    }
    console.log('Update');
    this.profileService.updateProfile(formData).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
