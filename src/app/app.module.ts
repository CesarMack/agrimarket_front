import { LOCALE_ID, NgModule, isDevMode } from '@angular/core';
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
//Configuración del locale de la app
import localeEsMX from '@angular/common/locales/es-MX';

import { registerLocaleData } from '@angular/common';
import { NgToastModule } from 'ng-angular-popup';

registerLocaleData(localeEsMX);
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    ToogleComponentComponent,
  ],
  imports: [
    NgToastModule,
    NotificationComponent,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js'/*  {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    } */),
  ],
  providers: [
    { provide: 'messaging', useValue: messaging },
    { provide: LOCALE_ID, useValue: 'es-MX' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
