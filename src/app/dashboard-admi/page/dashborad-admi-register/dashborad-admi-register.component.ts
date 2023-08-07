import { Component } from '@angular/core';
import { AdmiService } from '../../services/admi.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashborad-admi-register',
  templateUrl: './dashborad-admi-register.component.html',
  styleUrls: ['./dashborad-admi-register.component.css'],
})
export class DashboradAdmiRegisterComponent {
  registerForm: FormGroup;
  loader: boolean = false;
  showSuccessMessage: boolean = false;
  showErrorMessage: boolean = false;
  constructor(
    private admiService: AdmiService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  newUserAdmin(): void {
    if (this.registerForm.valid) {
      const name = this.registerForm.get('name')!.value;
      const lastName = this.registerForm.get('lastName')!.value;
      const email = this.registerForm.get('email')!.value;
      const password = this.registerForm.get('password')!.value;

      this.loader = true;
      this.admiService
        .setRegisterUser(name, lastName, email, password)
        .subscribe(
          (response) => {
            console.log(response);

            this.loader = false;
            this.showSuccessMessage = true; // Mostrar mensaje de éxito

            setTimeout(() => {
              this.showSuccessMessage = false;
              this.router.navigate(['/admin/users']);
            }, 2000);
          },
          (error) => {
            console.log(error);
            this.loader = false;
            this.showErrorMessage = true; // Mostrar mensaje de error
            setTimeout(() => {
              this.showErrorMessage = false; // Ocultar mensaje de error después de un tiempo
            }, 3000);
          }
        );
    }
  }
}
