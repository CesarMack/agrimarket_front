import { NgModule } from '@angular/core';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './pages/product-page/product-page.component';

@NgModule({
  declarations: [DashboardPageComponent, ProductPageComponent  ],
  imports: [
    CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
