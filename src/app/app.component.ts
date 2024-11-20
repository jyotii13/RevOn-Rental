import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { ModeComponent } from './mode/mode.component';
import { LoginComponent } from './login/login.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
// import { BinfoComponent } from './binfo/binfo.component';
import { BusinessComponent } from './business/business.component';
import { AddvehicleComponent } from './addvehicle/addvehicle.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { HighchartsChartModule } from 'highcharts-angular';
import { SalesByMonthComponent } from './business-dashboard/sales-by-month/sales-by-month.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HomeComponent, ModeComponent, LoginComponent, UsersignupComponent, BusinessComponent, AddvehicleComponent, NavbarComponent,HighchartsChartModule,SalesByMonthComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'RevOn';
  
}
