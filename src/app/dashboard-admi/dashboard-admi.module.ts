import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardAdmiComponent } from './dashboard-admi.component';
import { DashboardAdmiRoutingModule } from './dashboard-admi-routing.module';
import { SharedModule } from './shared/shared.module';
import { DashboardAdmiUserInfoPageComponent } from './page/dashboard-admi-user-info-page/dashboard-admi-user-info-page.component';
import { DashboardAdmiPageComponent } from './page/dashboard-admi-page/dashboard-admi-page.component';
import { DashboardAdmiUsersPageComponent } from './page/dashboard-admi-users-page/dashboard-admi-users-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardAdmiCategoriesPageComponent } from './page/dashboard-admi-categories-page/dashboard-admi-categories-page.component';
import { DashboardAdmiCategoryComponent } from './page/dashboard-admi-category/dashboard-admi-category.component';
import { DashboardAdmiUnitsComponent } from './page/dashboard-admi-units/dashboard-admi-units.component';
import { DashboradAdmiRegisterComponent } from './page/dashborad-admi-register/dashborad-admi-register.component';
import { DashboardAdmiDbPageComponent } from './page/dashboard-admi-db-page/dashboard-admi-db-page.component';

@NgModule({
  declarations: [
    DashboardAdmiComponent,
    DashboardAdmiPageComponent,
    DashboardAdmiUserInfoPageComponent,
    DashboardAdmiUsersPageComponent,
    DashboardAdmiCategoriesPageComponent,
    DashboardAdmiCategoryComponent,
    DashboardAdmiUnitsComponent,
    DashboradAdmiRegisterComponent,
    DashboardAdmiDbPageComponent,
  ],
  imports: [
    CommonModule,
    DashboardAdmiRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class DashboardAdmiModule {}
