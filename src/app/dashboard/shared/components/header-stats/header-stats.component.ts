import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'shared-header-stats',
  templateUrl: './header-stats.component.html',
})
export class HeaderStatsComponent implements OnInit {
  title!: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.url;
        this.updateTitleBasedOnRoute(currentRoute);
      }
    });
    const currentRoute = this.router.url;
    this.updateTitleBasedOnRoute(currentRoute);
  }

  private updateTitleBasedOnRoute(route: string): void {
    if (route === '/farmer') {
      this.title = 'Dashboard';
    } else if (route === '/farmer/orders') {
      this.title = 'Órdenes';
    } else if (route === '/farmer/orders/completed') {
      this.title = 'Órdenes';
    } else if (route === '/farmer/orders/pending') {
      this.title = 'Órdenes';
    } else if (route === '/farmer/orders/canceled') {
      this.title = 'Órdenes';
    } else if (route === '/farmer/products') {
      this.title = 'Productos';
    } else {
      this.title = 'Título predeterminado para otras rutas';
    }
  }
}
