import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private router: Router) {}
  navigateToAbout() {
    // Cambiar la ruta al componente 'Acerca de'
    this.router.navigate(['/store']);
  }
}
