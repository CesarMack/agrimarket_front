import { NgModule } from '@angular/core';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CommonModule, DatePipe } from '@angular/common';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { DetailsProductPageComponent } from './pages/details-product-page/details-product-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { SharedModule } from './shared/shared.module';
import { DetailsOrderPageComponent } from './pages/details-order-page/details-order-page.component';
import { FarmProfileComponent } from './pages/farm-profile/farm-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CardLineChartComponent } from './components/card-line-chart/card-line-chart.component';
import { CardStatsComponent } from './components/card-stats/card-stats.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardPageComponent,
    ProductPageComponent,
    DetailsProductPageComponent,
    ProfilePageComponent,
    DetailsOrderPageComponent,
    FarmProfileComponent,
    ProfilePageComponent,
    CardLineChartComponent,
    CardStatsComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [DatePipe],
})
export class DashboardModule {}
