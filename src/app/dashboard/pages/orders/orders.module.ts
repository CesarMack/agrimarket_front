import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { CanceledOrdersPageComponent } from './pages/canceled-orders-page/canceled-orders-page.component';
import { PendingOrdersPageComponent } from './pages/pending-orders-page/pending-orders-page.component';
import { CompletedOrdersPageComponent } from './pages/completed-orders-page/completed-orders-page.component';
import { RejectOrdersPageComponent } from './pages/reject-orders-page/reject-orders-page.component';

@NgModule({
  declarations: [OrdersComponent, OrdersPageComponent, CanceledOrdersPageComponent, PendingOrdersPageComponent, CompletedOrdersPageComponent, RejectOrdersPageComponent],
  imports: [CommonModule, OrdersRoutingModule],
})
export class OrdersModule {}
