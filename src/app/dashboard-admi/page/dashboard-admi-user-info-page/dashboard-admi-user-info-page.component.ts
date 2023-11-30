import { Component, OnInit } from '@angular/core';
import { AdmiService } from '../../services/admi.service';
import { User } from '../../interfaces/user';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../services/profile.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard-admi-user-info-page',
  templateUrl: './dashboard-admi-user-info-page.component.html',
})
export class DashboardAdmiUserInfoPageComponent implements OnInit {
  userData: User | undefined;
  userRole: string | undefined;
  profileForm: FormGroup;
  selectedImage: { file: File | null; previewUrl: string | null } = {
    file: null,
    previewUrl: null,
  };
  loading: boolean = false; // Variable para controlar la visibilidad del loader
  alert: boolean = true;

  constructor(
    private profileService: ProfileService,
    private formBuilder: FormBuilder,
    private admiService: AdmiService,
    private route: ActivatedRoute
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
    this.loading = true;
    // Obtén el ID del producto de la URL
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.admiService.getUserData(params['id']).subscribe(
          (data) => {
            this.userData = data;
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
    });
  }
  closeAlert() {
    this.alert = !this.alert;
  }
  removeImage(): void {
    // Limpiar la imagen seleccionada
    this.selectedImage = { file: null, previewUrl: null };
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
