import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderStatsComponent } from './components/header-stats/header-stats.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    NavBarComponent,
    SidebarComponent,
    HeaderStatsComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    NavBarComponent,
    SidebarComponent,
    HeaderStatsComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
