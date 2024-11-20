// import { CommonModule, NgFor } from '@angular/common';
// import { Component } from '@angular/core';

// interface Vehicle{
//   type: string;
//   quantity: number;
//   available: number;
// }

// @Component({
//   selector: 'app-dashboard',
//   standalone: true,
//   imports: [CommonModule, NgFor],
//   templateUrl: './dashboard.component.html',
//   styleUrl: './dashboard.component.css'
// })
// export class DashboardComponent {
//   vehicles: Vehicle[]=[
//     { type: 'Car', quantity: 23, available: 13},
//     { type: 'Bike/Scooter', quantity: 23, available: 13},
//     { type: 'Bike', quantity: 23, available: 13},
//   ]


//   viewMore (){
//     console.log('View more clicked');
//   }
// }


import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TopWidgetsComponent } from "../business-dashboard/header/header.component";
import { SalesByMonthComponent } from '../business-dashboard/sales-by-month/sales-by-month.component';
import { MainpartComponent } from "../business-dashboard/mainpart/mainpart.component";
import { TopThreeVehicleComponent } from "../business-dashboard/top-three-vehicle/top-three-vehicle.component";
import { LastFewTransactionComponent } from '../business-dashboard/last-few-transaction/last-few-transaction.component';
import { SalesByCategoryComponent } from '../business-dashboard/sales-by-category/sales-by-category.component';


// interface Vehicle{
//   type: string;
//   quantity: number;
//   available: number;
// }

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, SalesByMonthComponent, TopThreeVehicleComponent,LastFewTransactionComponent,SalesByCategoryComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  vehicles = [
    {
      type: 'Car',
      quantity: 10,
      available: 6,
      imageUrl: 'assets/images/hero.png',
    },
    {
      type: 'Scooter',
      quantity: 15,
      available: 9,
      imageUrl: 'assets/images/bike.png',
    },
    {
      type: 'Bicycle',
      quantity: 20,
      available: 12,
      imageUrl: 'assets/images/bicycle.png',
    },
  ];
  

  bookings = [
    { vehicle: 'Car', user: 'kate', date: '2024-11-16', status: 'Confirmed' },
    { vehicle: 'Bike', user: 'Ben', date: '2024-11-15', status: 'Pending' },
    { vehicle: 'Bicycle', user: 'tom', date: '2024-11-14', status: 'Cancelled' }
  ];

  notifications = [
    { message: '5 vehicles are due for maintenance.' },
    { message: 'New booking received from  kate.' },
    { message: 'Payment reminder for Ben.' }
  ];


  //add vehicle pop up 
  selectedVehicle: string = 'bicycle'; // Default selection (Bicycle)
  quantity: number = 1;
  brandName: string = '';
  model: string = '';
  businessRegistration: File | null = null;

  onVehicleChange() {
    // Handle any additional logic when vehicle type is changed, if needed.
    console.log(`Selected vehicle: ${this.selectedVehicle}`);
  }
  isModalVisible = false; // Track modal visibility

  showModal() {
    this.isModalVisible = true; // Show the modal
  }

  closeModal() {
    this.isModalVisible = false; // Hide the modal
  }

    // Handle form submission
    submitForm() {
      console.log('Form Submitted!');
      console.log('Vehicle Type:', this.selectedVehicle);
      console.log('Quantity:', this.quantity);
      if (this.brandName) console.log('Brand Name:', this.brandName);
      if (this.model) console.log('Model:', this.model);
  
      // Perform additional form processing (e.g., API call)
  
      // Close the modal and return to the dashboard
      this.closeModal();
    }

}
