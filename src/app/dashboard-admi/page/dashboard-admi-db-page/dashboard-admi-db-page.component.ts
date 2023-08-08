import { Component, OnInit } from '@angular/core';
import { Backups } from '../../interfaces/backups';
import { AdmiService } from '../../services/admi.service';
import { Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-dashboard-admi-db-page',
  templateUrl: './dashboard-admi-db-page.component.html',
  styleUrls: ['./dashboard-admi-db-page.component.css'],
})
export class DashboardAdmiDbPageComponent implements OnInit {
  backupsData: Backups | undefined;
  backupsFullData: Backups | undefined;
  showModal = false;
  modalMessage = '';
  action = '';
  nameBackup: String | undefined;
  loader: boolean = false;
  showSuccessMessage: boolean = false;
  showErrorMessage: boolean = false;

  constructor(
    private admiService: AdmiService,
    private router: Router,
    private location: LocationStrategy
  ) {}
  ngOnInit(): void {
    // Ahora, ejecutemos getSuggestions() y almacenemos los datos en suggestionsData
    this.admiService.getBackupDifferential().subscribe(
      (data) => {
        console.log(data);

        this.backupsData = data; // Asignamos los datos de suggestions
      },
      (error) => {
        console.error('Error fetching suggestions data:', error);
      }
    );
    this.admiService.getFullBackup().subscribe(
      (data) => {
        console.log(data);

        this.backupsFullData = data; // Asignamos los datos de suggestions
      },
      (error) => {
        console.error('Error fetching suggestions data:', error);
      }
    );
  }

  /*Make diferencital backup */
  createDifferentialBackup(): void {
    this.loader = true;
    this.admiService.setBackupDifferential().subscribe(
      (data) => {
        console.log(data);

        this.updateBackupDifferentialData();
        this.loader = false;
        this.showSuccessMessage = true; // Mostrar mensaje de éxito
        setTimeout(() => {
          this.showSuccessMessage = false; // Ocultar mensaje de éxito después de un tiempo
        }, 3000); // Asignamos los datos de suggestions
      },
      (error) => {
        console.error('Error fetching user data:', error);
        console.log(error);
        this.loader = false;
        this.showErrorMessage = true; // Mostrar mensaje de error
        setTimeout(() => {
          this.showErrorMessage = false; // Ocultar mensaje de error después de un tiempo
        }, 3000);
      }
    );
  }

  updateBackupDifferentialData(): void {
    this.admiService.getBackupDifferential().subscribe(
      (data) => {
        console.log(data);

        this.backupsData = data; // Asignamos los datos de suggestions
      },
      (error) => {
        console.error('Error fetching suggestions data:', error);
      }
    );
  }
  deleteBdBackup(name: String): void {
    this.loader = true;
    this.admiService.deleteBackupDifferential(name).subscribe(
      (data) => {
        this.updateBackupDifferentialData();
        this.loader = false;
        this.showSuccessMessage = true; // Mostrar mensaje de éxito
        setTimeout(() => {
          this.showSuccessMessage = false; // Ocultar mensaje de éxito después de un tiempo
        }, 3000);
      },
      (error) => {
        this.updateBackupDifferentialData();
        console.error('Error fetching user data:', error);
        console.log(error);
        this.loader = false;
        this.showErrorMessage = true; // Mostrar mensaje de error
        setTimeout(() => {
          this.showErrorMessage = false; // Ocultar mensaje de error después de un tiempo
        }, 3000);
      }
    );
  }

  restoreDifferentialBackup(name: String): void {
    this.loader = true;
    this.admiService.restoreBackupDifferential(name).subscribe(
      (data) => {
        this.updateBackupDifferentialData();
        this.loader = false;
        this.showSuccessMessage = true; // Mostrar mensaje de éxito
        setTimeout(() => {
          this.showSuccessMessage = false;
          this.router.navigate(['/login']);
          window.history.replaceState(null, '', '/login');
        }, 3000);
      },
      (error) => {
        console.error('Error fetching user data:', error);
        console.log(error);
        this.loader = false;
        this.showErrorMessage = true; // Mostrar mensaje de error
        setTimeout(() => {
          this.showErrorMessage = false; // Ocultar mensaje de error después de un tiempo
        }, 3000);
      }
    );
  }

  restoreFullBackup(): void {
    this.loader = true;
    this.admiService.restoreFullBackup().subscribe(
      (data) => {
        this.loader = false;
        this.showSuccessMessage = true; // Mostrar mensaje de éxito
        setTimeout(() => {
          this.showSuccessMessage = false; // Ocultar mensaje de éxito después de un tiempo
        }, 3000);
      },
      (error) => {
        console.error('Error fetching user data:', error);
        console.log(error);
        this.loader = false;
        this.showErrorMessage = true; // Mostrar mensaje de error
        setTimeout(() => {
          this.showErrorMessage = false; // Ocultar mensaje de error después de un tiempo
        }, 3000);
      }
    );
  }

  openModalFullBackupModal() {
    this.modalMessage =
      '¿Estás seguro de que deseas hacer restauración completa?';
    this.action = 'full';
    this.showModal = true;
  }
  openDeleteModal(name: String) {
    this.modalMessage = '¿Estás seguro que deseas eliminar?';
    this.action = 'eliminar';
    this.showModal = true;
    this.nameBackup = name;
  }

  openRestoreModal(name: String) {
    this.modalMessage =
      '¿Estás seguro que deseas restaurar? Esto te sacara de la sesión.';
    this.action = 'restaurar';
    this.showModal = true;
    this.nameBackup = name;
  }

  cancelModal() {
    this.showModal = false;
  }

  confirmAction() {
    console.log(`Acción ${this.action} confirmada`);

    if (this.action === 'eliminar') {
      this.deleteBdBackup(this.nameBackup!);
    } else if (this.action === 'restaurar') {
      this.restoreDifferentialBackup(this.nameBackup!);
    } else if (this.action === 'full') {
      this.restoreFullBackup();
    }
    this.showModal = false;
  }
}
