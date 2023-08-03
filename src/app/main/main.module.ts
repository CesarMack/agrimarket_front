import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from './shared/share.module';
import { MarketPageComponent } from './pages/market-page/market-page.component';
import { MarketDetailsComponent } from './pages/market-details/market-details.component';

@NgModule({
  declarations: [
    HomePageComponent,
    MainComponent,
    MarketPageComponent,
    MarketDetailsComponent,
  ],
  imports: [CommonModule, MainRoutingModule, SharedModule],
})
export class MainModule {}
