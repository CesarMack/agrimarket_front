import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './session/pages/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationPageComponent } from './session/pages/registration-page/registration-page.component';
import { ToogleComponentComponent } from './session/components/toogle-component/toogle-component.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environments';
import { initializeApp } from 'firebase/app';
import { NotificationComponent } from './notification/notification.component';
import { messaging } from 'src/configs/firebase.config';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    ToogleComponentComponent,
  ],
  imports: [
    NotificationComponent,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [{ provide: 'messaging', useValue: messaging }],
  bootstrap: [AppComponent],
})
export class AppModule {}
