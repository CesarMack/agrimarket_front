import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MarketDetailsComponent } from './store/pages/market-details/market-details.component';
import { SharedModule } from './shared/shared.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MarketDetailsComponent,
    LoginPageComponent,
    RegistrationPageComponent,
  ],
  imports: [BrowserModule, SharedModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
