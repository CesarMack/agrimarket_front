import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  loginForm: FormGroup;
  authError = false;
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')!.value;
      const password = this.loginForm.get('password')!.value;

      this.authService.auth(email, password).subscribe(
        (response) => {
          console.log(response);

          // Éxito en la autenticación, puedes redirigir o realizar otras acciones necesarias
          console.log(response.user.role);
          if (response.user.role === 'admin') {
            // Redirigir a la ruta de administrador

            console.log(response.user.access_token);

            localStorage.setItem('user_token', response.user.access_token);
            this.router.navigate(['/admin']);
          } else if (response.user.role === 'farmer') {
            // Redirigir a la ruta de cliente

            console.log(response.user.access_token);
            localStorage.setItem('user_token', response.user.access_token);
            this.router.navigate(['/farmer']);
          } else {
            // Si el rol no es "admin" ni "cliente", manejarlo como desees
          }
        },
        (error) => {
          // Mostrar mensaje de error en el HTML
          this.authError = true;
        }
      );
    }
  }
}
