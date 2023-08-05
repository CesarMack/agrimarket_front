import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardUserRoutingModule } from './dashboard-user-routing.module';
import { DashboardUserComponent } from './dashboard-user.component';
import { SharedModule } from './shared/shared.module';
import { UserPageComponent } from './pages/user-page/user-page.component';

@NgModule({
  declarations: [DashboardUserComponent, UserPageComponent],
  imports: [CommonModule, DashboardUserRoutingModule, SharedModule],
})
export class DashboardUserModule {}
