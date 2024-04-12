import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardUserRoutingModule } from './dashboard-user-routing.module';
import { DashboardUserComponent } from './dashboard-user.component';
import { SharedModule } from './shared/shared.module';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardUserComponent,
    UserPageComponent,
    ProfilePageComponent,
  ],
  imports: [
    CommonModule,
    DashboardUserRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class DashboardUserModule {}
