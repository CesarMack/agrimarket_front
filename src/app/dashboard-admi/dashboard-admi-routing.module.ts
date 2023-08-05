import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdmiComponent } from './dashboard-admi.component';
import { DashboardAdmiPageComponent } from './page/dashboard-admi-page/dashboard-admi-page.component';
import { DashboardAdmiDbPageComponent } from './page/dashboard-admi-db-page/dashboard-admi-db-page.component';
import { DashboardAdmiUsersPageComponent } from './page/dashboard-admi-users-page/dashboard-admi-users-page.component';
import { DashboardAdmiCategoriesPageComponent } from './page/dashboard-admi-categories-page/dashboard-admi-categories-page.component';
import { DashboardAdmiUserInfoPageComponent } from './page/dashboard-admi-user-info-page/dashboard-admi-user-info-page.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardAdmiComponent,
    children: [
      {
        path: '',
        component: DashboardAdmiPageComponent,
      },

      {
        path: 'db',
        component: DashboardAdmiDbPageComponent,
      },
      {
        path: 'users',
        component: DashboardAdmiUsersPageComponent,
      },
      {
        path: 'users/info',
        component: DashboardAdmiUserInfoPageComponent,
      },
      {
        path: 'categories',
        component: DashboardAdmiCategoriesPageComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardAdmiRoutingModule {}
