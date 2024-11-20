import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';


interface Booking {
  type: string;
  startDate: string;
  duration: number;
}

@Component({
  selector: 'app-booknotification',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './booknotification.component.html',
  styleUrl: './booknotification.component.css'
})
export class BooknotificationComponent {
  bookings: Booking[] = [
    { type: 'Tesla', startDate: '2024/09/26', duration: 5},
    { type: 'Bike', startDate: '2024/09/27', duration: 5},
    { type: 'Bicycle', startDate: '2024/09/28', duration: 5},
  ]

  viewDetails(booking: Booking): void{
    console.log('View details for', booking.type);
  }
  respond(booking: Booking): void{
    console.log('Respond to', booking.type);
  }

}
