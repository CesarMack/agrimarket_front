import { Component, OnInit } from '@angular/core';
import { ProfileService } from './services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent implements OnInit {
  constructor(private profileService: ProfileService, private router: Router) {}
  ngOnInit(): void {
    const typeUser = localStorage.getItem('user_role');

    this.profileService.getDataProfile().subscribe((response) => {
      if (typeUser == 'admin') {
        this.router.navigate(['/admin']);
      } else if (typeUser == 'farmer') {
        this.router.navigate(['/farmer']);
      } else {
        this.router.navigate(['/dashboard']);
      }
    });
  }
}
