import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardAdmiComponent } from './dashboard-admi.component';
import { DashboardAdmiRoutingModule } from './dashboard-admi-routing.module';
import { SharedModule } from './shared/shared.module';
import { DashboardAdmiUserInfoPageComponent } from './page/dashboard-admi-user-info-page/dashboard-admi-user-info-page.component';

@NgModule({
  declarations: [DashboardAdmiComponent, DashboardAdmiUserInfoPageComponent],
  imports: [CommonModule, DashboardAdmiRoutingModule, SharedModule],
})
export class DashboardAdmiModule {}
