import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardAdmiComponent } from './dashboard-admi.component';
import { DashboardAdmiRoutingModule } from './dashboard-admi-routing.module';
import { SharedModule } from './shared/shared.module';
import { DashboardAdmiUserInfoPageComponent } from './page/dashboard-admi-user-info-page/dashboard-admi-user-info-page.component';
import { DashboardAdmiPageComponent } from './page/dashboard-admi-page/dashboard-admi-page.component';
import { DashboardAdmiUsersPageComponent } from './page/dashboard-admi-users-page/dashboard-admi-users-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardAdmiComponent,
    DashboardAdmiPageComponent,
    DashboardAdmiUserInfoPageComponent,
    DashboardAdmiUsersPageComponent,
  ],
  imports: [
    CommonModule,
    DashboardAdmiRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class DashboardAdmiModule {}
