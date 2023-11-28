import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { LocalTimePipe } from './components/pipe/local-time.pipe';
import { SidebarAdminComponent } from './components/sidebar-admin/sidebar-admin.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { HeaderStatsComponent } from './components/header-stats/header-stats.component';
import { FooterAdminComponent } from './components/footer-admin/footer-admin.component';
import { CardStatsComponent } from './components/card-stats/card-stats.component';

@NgModule({
  declarations: [
    NavBarComponent,
    LocalTimePipe,
    SidebarAdminComponent,
    NavbarAdminComponent,
    HeaderStatsComponent,
    FooterAdminComponent,
    CardStatsComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    NavBarComponent,
    LocalTimePipe,
    SidebarAdminComponent,
    NavbarAdminComponent,
    HeaderStatsComponent,
    FooterAdminComponent,
  ],
})
export class SharedModule {}
