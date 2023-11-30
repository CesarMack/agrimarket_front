import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/dashboard-admi/interfaces/user';
import { AdmiService } from 'src/app/dashboard-admi/services/admi.service';

@Component({
  selector: 'shared-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
})
export class SidebarAdminComponent {
  userData: User | undefined;
  collapseShow = 'hidden';
  constructor(private admiService: AdmiService, private router: Router) {}

  ngOnInit() {
    this.admiService.getDataProfile().subscribe(
      (data) => {
        this.userData = data;
      },
      (error) => {
        console.error('Error fetching dashboard data:', error);
      }
    );
  }
  toggleCollapseShow(classes: any) {
    this.collapseShow = classes;
  }
  redirectToUserDetails(id: string) {
    // Utiliza el servicio Router para navegar a la nueva ventana
    this.router.navigate(['/admin/user', id]);
  }
  logout() {
    // Limpiar el localStorage
    localStorage.clear();

    // Redirigir a la página de inicio
    this.router.navigate(['/']);
  }
}
