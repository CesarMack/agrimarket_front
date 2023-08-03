import { NgModule } from '@angular/core';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { DetailsProductPageComponent } from './pages/details-product-page/details-product-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { SharedModule } from './shared/shared.module';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardPageComponent,
    ProductPageComponent,
    DetailsProductPageComponent,
    ProfilePageComponent,
    OrdersPageComponent,
    OrdersComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
