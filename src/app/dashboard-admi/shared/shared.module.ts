import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { LocalTimePipe } from './components/pipe/local-time.pipe';

@NgModule({
  declarations: [NavBarComponent, LocalTimePipe],
  imports: [CommonModule, RouterModule],
  exports: [NavBarComponent, LocalTimePipe],
})
export class SharedModule {}
