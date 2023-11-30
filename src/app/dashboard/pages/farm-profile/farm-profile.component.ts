import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-farm-profile',
  templateUrl: './farm-profile.component.html',
})
export class FarmProfileComponent implements OnInit {
  imageUrl: string | ArrayBuffer | null = null;
  farmId: string = '';
  farmForm: FormGroup;
  selectedImage: { file: File | null; previewUrl: string | null } = {
    file: null,
    previewUrl: null,
  };
  loading: boolean = false; // Variable para controlar la visibilidad del loader
  alert: boolean = true;
  constructor(
    private profileService: ProfileService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.farmForm = this.formBuilder.group({
      name: '',
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
    // Obtén el ID del producto de la URL
    this.route.params.subscribe((params) => {
      this.farmId = params['id']; // Convierte el parámetro a número si es necesario

      if (params['id']) {
        this.profileService.getDataFarm(this.farmId).subscribe(
          (response) => {
            this.farmForm.patchValue({
              name: response.data.name,
              phone: response.data.phone,
              street: response.data.street,
              ext_num: response.data.ext_num,
              int_num: response.data.int_num,
              suburb: response.data.suburb,
              city: response.data.city,
              state: response.data.state,
              zip_code: response.data.zip_code,
            });
            this.selectedImage = {
              file: null,
              previewUrl: response.data.photo,
            };
            this.loading = false;
          },
          (error) => {
            console.error('Error fetching CP data:', error);
          }
        );
      }
    });
  }
  closeAlert() {
    this.alert = !this.alert;
  }
  newFarmer(): void {
    this.loading = true;

    const formData = new FormData();
    formData.append('name', this.farmForm.get('name')!.value);
    formData.append('phone', this.farmForm.get('phone')!.value);
    formData.append('street', this.farmForm.get('street')!.value);
    formData.append('ext_num', this.farmForm.get('ext_num')!.value);
    formData.append('int_num', this.farmForm.get('int_num')!.value);
    formData.append('suburb', this.farmForm.get('suburb')!.value);
    formData.append('city', this.farmForm.get('city')!.value);
    formData.append('state', this.farmForm.get('state')!.value);
    formData.append('zip_code', this.farmForm.get('zip_code')!.value);
    if (this.selectedImage.file !== null) {
      formData.append('photo', this.selectedImage.file);
    }
    if (this.farmId) {
      this.profileService.updateFarmer(formData, this.farmId).subscribe(
        (response) => {
          this.loading = false;
          this.alert = false;
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      this.profileService.createFarmer(formData).subscribe(
        (response) => {
          this.loading = false;
          this.alert = false;
        },
        (error) => {
          console.log(error);
          this.loading = false;
        }
      );
    }
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
}
