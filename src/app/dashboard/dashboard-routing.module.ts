import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { DetailsProductPageComponent } from './pages/details-product-page/details-product-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { DashboardComponent } from './dashboard.component';
import { DetailsOrderPageComponent } from './pages/details-order-page/details-order-page.component';
import { FarmProfileComponent } from './pages/farm-profile/farm-profile.component';
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
        path: 'products/details/:id',
        component: DetailsProductPageComponent,
      },
      {
        path: 'products/details',
        component: DetailsProductPageComponent,
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
        path: 'profile/farm/:id',
        component: FarmProfileComponent,
      },
      {
        path: 'profile/farm',
        component: FarmProfileComponent,
      },
      {
        path: 'orders/details/:id',
        component: DetailsOrderPageComponent,
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('./pages/orders/orders.module').then((x) => x.OrdersModule),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
