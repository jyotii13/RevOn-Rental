import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'app-sales-by-category',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './sales-by-category.component.html',
  styleUrls: ['./sales-by-category.component.css'],
})
export class SalesByCategoryComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;

  constructor() {
    this.chartOptions = {
      chart: {
        type: 'pie',
        height: 325,
      },
      title: {
        text: 'Category wise sales',
      },
      series: [
        {
          type: 'pie',
          data: [
            { name: 'Car', y: 38.2, color: '#044342' },
            { name: 'Bike', y: 33.8, color: '#7e0505' },
            { name: 'Cycle', y: 28.0, color: '#ed9e20' },
          ],
        },
      ],
      credits: {
        enabled: false,
      },
    };
  }
}
