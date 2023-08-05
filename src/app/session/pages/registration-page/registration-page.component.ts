import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { userRegister } from '../../../interfaces/auth';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css'],
})
export class RegistrationPageComponent {
  registerForm: FormGroup;
  authError = false;
  selectedUserRole: string = ''; // Initialize with an empty string

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

  selectOption(role: string): void {
    console.log('Role selected:', role);
    {
      this.selectedUserRole = role;
      this.registerForm.controls['role'].setValue(role); // Set the selected role in the form control
    }
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Submit button clicked');
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

      this.authService.register(data).subscribe(
        (response) => {
          // Éxito en la autenticación, puedes redirigir o realizar otras acciones necesarias
          console.log(response.user.role);
        },
        (error) => {
          // Mostrar mensaje de error en el HTML
          this.authError = true;
        }
      );
    }
  }
}
