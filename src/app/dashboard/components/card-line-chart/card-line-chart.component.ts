import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-card-line-chart',
  templateUrl: './card-line-chart.component.html',
  styleUrls: ['./card-line-chart.component.css'],
})
export class CardLineChartComponent implements OnInit {
  public chart!: Chart;
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {
    const labels = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
    ];
    const data = {
      labels: labels,
      datasets: [
        {
          backgroundColor: '#4c51bf',
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#4c51bf',
          tension: 0.1,
        },
      ],
    };
    let ctx: any = document.getElementById('line-chart') as HTMLCanvasElement;
    ctx = ctx.getContext('2d');
    new Chart(ctx, { type: 'line', data });
  }
}
