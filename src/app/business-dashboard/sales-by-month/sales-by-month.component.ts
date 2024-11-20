// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-sales-by-month',
//   standalone: true,
//   imports: [],
//   templateUrl: './sales-by-month.component.html',
//   styleUrl: './sales-by-month.component.css'
// })
// export class SalesByMonthComponent {

// }

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'app-sales-by-month',
  standalone: true,
  imports: [HighchartsChartModule, CommonModule],
  templateUrl: './sales-by-month.component.html',
  styleUrls: ['./sales-by-month.component.css'], // Fixed typo from `styleUrl` to `styleUrls`
})
export class SalesByMonthComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'line',
      height: 325,
    },
    title: {
      text: 'Month wise sales',
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yAxis: {
      title: {
        text: 'Revenue in Rs',
      },
    },
    series: [
      {
        name: 'Car',
        type: 'line',
        color: '#044342',
        data: [70, 69, 95, 145, 182, 215, 252, 265, 233, 183, 139, 196],
      },
      {
        name: 'Bike',
        type: 'line',
        color: '#7e0505',
        data: [47, 52, 44, 35, 58, 69, 32, 53, 71, 82, 99, 159],
      },
      {
        name: 'Cycle',
        type: 'line',
        color: '#ed9e20',
        data: [17, 22, 14, 25, 18, 19, 22, 43, 11, 32, 29, 59],
      },
    ],
    credits: {
      enabled: false,
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
