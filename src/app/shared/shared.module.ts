import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [SidebarComponent, NavBarComponent],
  imports: [
    CommonModule,
    RouterModule],
  exports: [SidebarComponent, NavBarComponent],
})
export class SharedModule {}
