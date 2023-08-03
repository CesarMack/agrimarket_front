import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SessionRoutingModule } from './session-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SessionComponent } from './session.component';
import { RegistrationPageComponent } from './pages/registration-page/registration-page.component';

@NgModule({
  declarations: [
    SessionComponent,
    LoginPageComponent,
    RegistrationPageComponent,
  ],
  imports: [CommonModule, SessionRoutingModule],
})
export class SessionModule {}
