import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'shared-header-stats',
  templateUrl: './header-stats.component.html',
})
export class HeaderStatsComponent implements OnInit {
  // Agrega el servicio ActivatedRoute al constructor
  constructor(private route: ActivatedRoute) {
    // Método para verificar la ruta actual
  }
  ngOnInit(): void {
    const response = this.route.snapshot.routeConfig?.path === 'admin';
  }
}
