import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { DetailsProductPageComponent } from './pages/details-product-page/details-product-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { DashboardComponent } from './dashboard.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: DashboardPageComponent,
      },
      {
        path: 'products',
        component: ProductPageComponent,
      },
      {
        path: 'details',
        component: DetailsProductPageComponent,
      },
      {
        path: 'profile',
        component: ProfilePageComponent,
      },
      {
        path: 'orders',
        component: OrdersPageComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
