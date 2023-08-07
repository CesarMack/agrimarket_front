import { Component, OnInit } from '@angular/core';
import { Users } from '../../interfaces/users';
import { AdmiService } from '../../services/admi.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-admi-users-page',
  templateUrl: './dashboard-admi-users-page.component.html',
  styleUrls: ['./dashboard-admi-users-page.component.css'],
})
export class DashboardAdmiUsersPageComponent implements OnInit {
  usersData: Users | undefined;
  searchForm: FormGroup;
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
          this.usersData = data;
        },
        (error) => {
          console.error('Error fetching user data:', error);
        }
      );
    }
  }
  redirectAndStoreUserId(userId: string): void {
    localStorage.setItem('user_id', userId.toString());

    this.router.navigate(['/admin/infoUser']);
  }
}
