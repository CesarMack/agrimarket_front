import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { HeaderStatsComponent } from './components/header-stats/header-stats.component';
import { FooterAdminComponent } from './components/footer-admin/footer-admin.component';
import { SidebarAdminComponent } from './components/sidebar-admin/sidebar-admin.component';

@NgModule({
  declarations: [
    NavBarComponent,
    AdminNavbarComponent,
    HeaderStatsComponent,
    FooterAdminComponent,
    SidebarAdminComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    NavBarComponent,
    AdminNavbarComponent,
    HeaderStatsComponent,
    FooterAdminComponent,
    SidebarAdminComponent,
  ],
})
export class SharedModule {}
