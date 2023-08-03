import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { CanceledOrdersPageComponent } from './pages/canceled-orders-page/canceled-orders-page.component';
import { PendingOrdersPageComponent } from './pages/pending-orders-page/pending-orders-page.component';
import { CompletedOrdersPageComponent } from './pages/completed-orders-page/completed-orders-page.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
    children: [
      {
        path: '',
        component: OrdersPageComponent,
      },
      {
        path: 'completed',
        component: CompletedOrdersPageComponent,
      },
      {
        path: 'canceled',
        component: CanceledOrdersPageComponent,
      },
      {
        path: 'pending',
        component: PendingOrdersPageComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
