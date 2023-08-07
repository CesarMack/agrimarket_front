import { Component, OnInit } from '@angular/core';
import { Backups } from '../../interfaces/backups';
import { AdmiService } from '../../services/admi.service';

@Component({
  selector: 'app-dashboard-admi-db-page',
  templateUrl: './dashboard-admi-db-page.component.html',
  styleUrls: ['./dashboard-admi-db-page.component.css'],
})
export class DashboardAdmiDbPageComponent implements OnInit {
  backupsData: Backups | undefined;
  constructor(private admiService: AdmiService) {}
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
  }
}
