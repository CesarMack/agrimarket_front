import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { MainRoutingModule } from "./main-routing.module";
import { MarketPageComponent } from "./pages/market-page/market-page.component";
import { MarketDetailsComponent } from "./pages/market-details/market-details.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    HomePageComponent,
    MarketPageComponent,
    MarketDetailsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
  ]
})
export class MainModule { }
