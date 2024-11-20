import { Component, AfterViewInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'app-top-three-vehicle',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './top-three-vehicle.component.html',
  styleUrls: ['./top-three-vehicle.component.css'], // Fixed typo from styleUrl to styleUrls
})
export class TopThreeVehicleComponent implements AfterViewInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options;

  constructor() {
    // Define the chart options
    this.chartOptions = {
      chart: {
        type: 'bar',
        height: 225,
      },
      title: {
        text: 'Top 3 Products',
      },
      xAxis: {
        categories: ['Honda CRF 250L', 'Royal Enfield Classic 350', 'Maruti Suzuki Alto'],
      },
      yAxis: {
        title: {
          text: '',
        },
      },
      series: [
        {
          type: 'bar',
          showInLegend: false,
          data: [
            { name: 'Honda CRF 250L', y: 395, color: '#044342' },
            { name: 'Royal Enfield Classic 350', y: 385, color: '#7e0505' },
            { name: 'Maruti Suzuki Alto', y: 275, color: '#ed9e20' },
          ],
        },
      ],
      credits: {
        enabled: false,
      },
    };
  }

  ngAfterViewInit(): void {}
}
