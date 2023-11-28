import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-farm-profile',
  templateUrl: './farm-profile.component.html',
  styleUrls: ['./farm-profile.component.css'],
})
export class FarmProfileComponent implements OnInit {
  imageUrl: string | ArrayBuffer | null = null;

  farmId: string = '';
  farmForm: FormGroup;
  selectedImage: { file: File | null; previewUrl: string | null } = {
    file: null,
    previewUrl: null,
  };
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
    // Obtén el ID del producto de la URL
    this.route.params.subscribe((params) => {
      this.farmId = params['id']; // Convierte el parámetro a número si es necesario

      if (params['id']) {
        this.profileService.getDataFarm(this.farmId).subscribe(
          (response) => {
            console.log('Data del farm');

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
            console.log(this.selectedImage);
          },
          (error) => {
            console.error('Error fetching CP data:', error);
          }
        );
      }
    });
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
