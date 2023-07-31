import { NgModule } from '@angular/core';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [DashboardRoutingModule],
})
export class DashboardModule {}
