import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {
  loginForm: FormGroup;
  authError = false;
  showFieldRequiredMessage = false;
  errorMessage: string = '';
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

  alert: boolean = false;

  closeAlert() {
    this.alert = !this.alert;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')!.value;
      const password = this.loginForm.get('password')!.value;

      this.authService.auth(email, password).subscribe(
        (response) => {
          /*
          console.log(response); */

          if (response.user.role === 'admin') {
            localStorage.setItem('user_token', response.user.access_token);
            localStorage.setItem('user_role', response.user.role);
            this.router.navigate(['/admin']);
          } else if (response.user.role === 'farmer') {
            localStorage.setItem('user_token', response.user.access_token);
            localStorage.setItem('user_role', response.user.role);
            this.router.navigate(['/farmer']);
          } else {
            localStorage.setItem('user_token', response.user.access_token);
            localStorage.setItem('user_role', response.user.role);
            this.router.navigate(['/store']);
            // Si el rol no es "admin" ni "cliente", manejarlo como desees
          }
        },
        (error) => {
          /*
          console.log(error); */
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
    }
  }
}
