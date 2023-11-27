import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-farm-profile',
  templateUrl: './farm-profile.component.html',
  styleUrls: ['./farm-profile.component.css'],
})
export class FarmProfileComponent implements OnInit {
  imageUrl: string | ArrayBuffer | null = null;

  farmForm: FormGroup;
  selectedImage: { file: File | null; previewUrl: string | null } = {
    file: null,
    previewUrl: null,
  };
  constructor(
    private profileService: ProfileService,
    private formBuilder: FormBuilder
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

  ngOnInit(): void {}

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
