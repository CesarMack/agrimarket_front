import { Component, OnInit } from '@angular/core';
import { AdmiService } from '../../services/admi.service';
import { User } from '../../interfaces/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-admi-user-info-page',
  templateUrl: './dashboard-admi-user-info-page.component.html',
})
export class DashboardAdmiUserInfoPageComponent implements OnInit {
  userData: User | undefined;
  userRole: string | undefined;

  constructor(
    private admiService: AdmiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Obtén el ID del producto de la URL
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.admiService.getUserData(params['id']).subscribe(
          (data) => {
            this.userData = data;
          },
          (error) => {
            console.error('Error fetching dashboard data:', error);
          }
        );
      }
    });
  }
}
