import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './session/pages/login-page/login-page.component';
import { RegistrationPageComponent } from './session/pages/registration-page/registration-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main/main.module').then((x) => x.MainModule),
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    component: RegistrationPageComponent,
  },

  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((x) => x.DashboardModule),
  },
  {
    path: 'dashboardAdmi',
    loadChildren: () =>
      import('./dashboard-admi/dashboard-admi.module').then(
        (x) => x.DashboardAdmiModule
      ),
  },

  {
    path: 'dashboardUser',
    loadChildren: () =>
      import('./dashboard-user/dashboard-user.module').then(
        (x) => x.DashboardUserModule
      ),
  },
  {
    path: '**',
    loadChildren: () => import('./main/main.module').then((x) => x.MainModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
