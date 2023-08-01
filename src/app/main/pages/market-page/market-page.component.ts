import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-market-page',
  templateUrl: './market-page.component.html',
  styleUrls: ['./market-page.component.css'],
})
export class MarketPageComponent {
  constructor(private router: Router) {}
  navigateToAbout() {
    // Cambiar la ruta al componente 'Acerca de'
    this.router.navigate(['/details']);
  }
}
