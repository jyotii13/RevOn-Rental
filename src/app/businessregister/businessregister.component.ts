import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-businessregister',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink],
  templateUrl: './businessregister.component.html',
  styleUrl: './businessregister.component.css'
})
export class BusinessregisterComponent {
  businessType: string = 'individual';

  toggleForm(event: any): void {
    this.businessType = event.target.value;
  }

  //object for signup
  // businessObj: any ={
  //   "firstName":"",
  //   "lastName": "",
  //   "email": "",
  //   "password": "",
  //   "contactNumber": "",
  //   "address": "",
  //   "businessName":"",
  //   "businessRegistrationNumber":""
  // }



}
