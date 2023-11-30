import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'shared-header-stats',
  templateUrl: './header-stats.component.html',
})
export class HeaderStatsComponent implements OnInit {
  title!: string;
  // Agrega el servicio ActivatedRoute al constructor
  constructor(private route: ActivatedRoute, private router: Router) {
    // Método para verificar la ruta actual
  }
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.url;
        this.updateTitleBasedOnRoute(currentRoute);
      }
    });
    const currentRoute = this.router.url;
    this.updateTitleBasedOnRoute(currentRoute);
    const response = this.route.snapshot.routeConfig?.path === 'admin';
  }


  private updateTitleBasedOnRoute(route: string): void {
    if (route === '/admin') {
      this.title = 'Dashboard';
    } else if (route === '/admin/users') {
      this.title = 'Usuarios';
    } else if (route === '/admin/userRegister') {
      this.title = 'Usuarios';
    } else if (route === '/admin/categories') {
      this.title = 'Categorías';
    } else if (route === '/farmer/orders/canceled') {
      this.title = 'Órdenes';
    } else if (route === '/farmer/orders/rejected') {
      this.title = 'Órdenes';
    } else if (route === '/admin/product') {
      this.title = 'Productos';
    } else {
      this.title = 'Productos';
    }
  }
}

