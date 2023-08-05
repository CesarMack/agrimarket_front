import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardUserComponent } from './dashboard-user.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardUserComponent,
    children: [
      {
        path: '',
        component: UserPageComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardUserRoutingModule {}
