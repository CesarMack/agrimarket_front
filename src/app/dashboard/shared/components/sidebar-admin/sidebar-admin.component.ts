import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/dashboard/interfaces/profile';
import { ProfileService } from 'src/app/main/services/profile.service';

@Component({
  selector: 'shared-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
})
export class SidebarAdminComponent {
  isList!: number;
  isMenu: boolean = false;
  isSearch: boolean = false;
  collapseShow = 'hidden';
  userData: Profile | undefined;
  constructor(private farmService: ProfileService, private router: Router) {}

  ngOnInit() {
    this.farmService.getDataProfile().subscribe(
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
  redirectToUserDetails() {
    // Utiliza el servicio Router para navegar a la nueva ventana
    this.router.navigate(['/farmer/profile']);
  }
  logout() {
    // Limpiar el localStorage
    localStorage.clear();

    // Redirigir a la página de inicio
    this.router.navigate(['/']);
  }
}
