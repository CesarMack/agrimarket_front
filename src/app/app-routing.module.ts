import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SessionComponent } from './session/session.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component:MainComponent,
    loadChildren: () => import('./main/main.module').then(x=>x.MainModule),
  },
  {
    path: 'login',
    component:SessionComponent,
    loadChildren: () => import('./session/session.module').then(x=>x.SessionModule),
  },
  {
    path: 'dashboard',
    component:DashboardComponent,
    loadChildren: () => import('./dashboard/dashboard.module').then(x=>x.DashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
