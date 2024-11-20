// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-last-few-transaction',
//   standalone: true,
//   imports: [],
//   templateUrl: './last-few-transaction.component.html',
//   styleUrl: './last-few-transaction.component.css'
// })
// export class LastFewTransactionComponent {

// }


import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-last-few-transaction',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './last-few-transaction.component.html',
    styleUrl: './last-few-transaction.component.css'
  })
export class LastFewTransactionComponent implements OnInit {

  transactions = [
    {
      id: 1,
      title: "Maruti 800",
      price: "Rs 10000",
      shop: "Shyam Shyam",
      location: "Mahendrapul",
      status: "pending",
      
    },
    {
      id: 2,
      title: "Tata Tiago",
      price: "Rs 2000",
      shop: "Rita Rita",
      location: "Chipledhunga",
      status: "confirmed",
    },
      
    {
      id: 3,
      title: "Yamaha FZ Serie",
      price: "Rs 3000",
      shop: "Hari Hari",
      location: "Taxi chowk",
      status: "confirmed",
      
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}