import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from './shared/share.module';
import { MarketPageComponent } from './pages/market-page/market-page.component';
import { MarketDetailsComponent } from './pages/market-details/market-details.component';
import { MarketOrderComponent } from './pages/market-order/market-order.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomePageComponent,
    MainComponent,
    MarketPageComponent,
    MarketDetailsComponent,
    MarketOrderComponent,
  ],
  imports: [CommonModule, MainRoutingModule, SharedModule, ReactiveFormsModule],
})
export class MainModule {}
