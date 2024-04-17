import { Component, OnInit } from '@angular/core';
import { Users } from '../../interfaces/users';
import { AdmiService } from '../../services/admi.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-admi-users-page',
  templateUrl: './dashboard-admi-users-page.component.html',
})
export class DashboardAdmiUsersPageComponent implements OnInit {
  usersData: Users | undefined;
  searchForm: FormGroup;
  loading: boolean = true;
  constructor(
    private admiService: AdmiService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.searchForm = this.formBuilder.group({
      search: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.admiService.getUsers().subscribe(
      (data) => {
        this.usersData = data;
        this.loading = false; /*
        console.log(data); */
      },
      (error) => {
        console.error('Error fetching dashboard data:', error);
      }
    );
  }

  searchUsers(): void {
    if (this.searchForm.valid) {
      const search = this.searchForm.get('search')!.value;

      this.admiService.findUser(search).subscribe(
        (data) => {
          this.usersData = data; /*
          console.log(data); */
        },
        (error) => {
          console.error('Error fetching user data:', error);
        }
      );
    }
  }
  redirectAndStoreUserId(userId: string, userRole: string): void {
    localStorage.setItem('user_id', userId.toString());
    localStorage.setItem('user_role', userRole.toString());

    this.router.navigate(['/admin/infoUser']);
  }

  getRoleDisplayName(role: string) {
    switch (role) {
      case 'admin':
        return 'Administrador';
      case 'client':
        return 'Cliente';
      case 'farmer':
        return 'Granjero';
      default:
        return 'Desconocido';
    }
  }

  getRoleBadgeColor(role: string) {
    switch (role) {
      case 'admin':
        return 'bg-blue-500 text-white'; // Clases de colores para el rol de administrador
      case 'client':
        return 'bg-green-500 text-white'; // Clases de colores para el rol de cliente
      case 'farmer':
        return 'bg-orange-500 text-white'; // Clases de colores para el rol de granjero
      default:
        return 'bg-gray-500 text-white'; // Clases de colores para roles desconocidos
    }
  }

  redirectToUserDetails(id: string) {
    // Utiliza el servicio Router para navegar a la nueva ventana
    this.router.navigate(['/admin/user', id]);
  }
}
