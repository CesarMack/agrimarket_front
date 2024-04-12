import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CPData } from 'src/app/dashboard/interfaces/cp';
import { Farm } from 'src/app/dashboard/interfaces/farm';
import { Profile } from 'src/app/dashboard/interfaces/profile';
import { ProfileService } from 'src/app/dashboard/services/profile.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
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
  farmData: Farm | undefined;
  loading: boolean = false; // Variable para controlar la visibilidad del loader
  alert: boolean = true;
  constructor(
    private profileService: ProfileService,
    private formBuilder: FormBuilder,
    private router: Router
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
    this.loading = true;
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
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching dashboard data:', error);
        this.loading = false;
      }
    );

  }

  closeAlert() {
    this.alert = !this.alert;
  }
  fetchCPInfo(cp: string) {
    this.profileService.getCPInfo(cp).subscribe(
      (data) => {
        this.cpData = data; // Assuming the response structure matches the provided JSON
        this.profileForm.patchValue({
          city: this.cpData.response.ciudad,
          state: this.cpData.response.estado,
          suburb: this.cpData.response.asentamiento[0],
          // ...otros campos aquí...
        });
      },
      (error) => {
        console.error('Error fetching CP data:', error);
      }
    );
  }

  redirectToFarmProfile(farmId: string) {
    // Utiliza el servicio Router para navegar a la nueva ventana
    this.router.navigate(['/farmer/profile/farm', farmId]);
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
    this.loading = true;
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
    this.profileService.updateProfile(formData).subscribe(
      (response) => {
        console.log(response);
        this.loading = false;
        this.alert = false; // Esperar dos segundos antes de redirigir
      },
      (error) => {
        console.log(error);
        this.loading = false;
      }
    );
  }
}
