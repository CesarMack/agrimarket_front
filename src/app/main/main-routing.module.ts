import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { MarketPageComponent } from './pages/market-page/market-page.component';
import { MarketDetailsComponent } from './pages/market-details/market-details.component';
import { MainComponent } from './main.component';
import { MarketOrderComponent } from './pages/market-order/market-order.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: HomePageComponent },

      {
        path: 'store/:id',
        component: MarketDetailsComponent,
      },
      {
        path: 'store',
        component: MarketPageComponent,
      },
      {
        path: 'order-details/:id',
        component: MarketOrderComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
