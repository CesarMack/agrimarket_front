import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from './shared/shared.module';
import { SessionComponent } from './session/session.component';
import { SessionModule } from './session/session.module';
import { MainModule } from './main/main.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SessionComponent,
    DashboardComponent
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, MainModule, SessionModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
