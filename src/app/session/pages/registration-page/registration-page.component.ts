import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { userRegister } from '../../../interfaces/auth';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
})
export class RegistrationPageComponent {
  registerForm: FormGroup;
  authError = false;
  selectedUserRole: string = ''; // Initialize with an empty string

  loader: boolean = false;
  showSuccessMessage: boolean = false;
  showFieldRequiredMessage = false;
  errorMessage: string = '';
  alert: boolean = false;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      userRole: ['', Validators.required],
    });
  }

  closeAlert() {
    this.alert = !this.alert;
  }

  selectOption(role: string): void {
    {
      this.selectedUserRole = role;
      this.registerForm.controls['role'].setValue(role); // Set the selected role in the form control
    }
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const first_name = this.registerForm.get('firstName')!.value;
      const last_name = this.registerForm.get('lastName')!.value;
      const email = this.registerForm.get('email')!.value;
      const password = this.registerForm.get('password')!.value;
      const userRole = this.registerForm.get('userRole')!.value;

      const data: userRegister = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        type: userRole,
      };

      this.loader = true;

      this.authService.register(data).subscribe(
        (response) => {
          this.loader = false;
          this.showSuccessMessage = true; // Mostrar mensaje de éxito
          setTimeout(() => {
            this.showSuccessMessage = false; // Ocultar mensaje de éxito después de un tiempo
          }, 3000);
        },
        (error) => {
          this.errorMessage = error.message;
          // Mostrar mensaje de error en el HTML
          this.authError = true;
          setTimeout(() => {
            this.authError = false;
          }, 2000);
        }
      );
    } else {
      this.showFieldRequiredMessage = true;
      setTimeout(() => {
        this.showFieldRequiredMessage = false;
      }, 2000);
    }
  }
}
