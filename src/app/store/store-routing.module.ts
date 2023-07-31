import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarketPageComponent } from './pages/market-page/market-page.component';
import { MarketDetailsComponent } from './pages/market-details/market-details.component';

const routes: Routes = [
  {
    path: '',
    component: MarketPageComponent,
  },
  {
    path: 'details',
    component: MarketDetailsComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
