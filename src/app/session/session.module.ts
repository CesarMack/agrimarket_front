import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SessionRoutingModule } from "./session-routing.module";
import { LoginPageComponent } from "./pages/login-page/login-page.component";

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    SessionRoutingModule
  ]
})
export class SessionModule { }
