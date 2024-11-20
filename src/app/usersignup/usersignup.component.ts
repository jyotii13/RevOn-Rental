import { Component, inject, NgZone, HostListener  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet, Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-usersignup',
  standalone: true,
  imports: [FormsModule, RouterOutlet, RouterLink, HttpClientModule, CommonModule],
  templateUrl: './usersignup.component.html',
  styleUrl: './usersignup.component.css'
})

export class UsersignupComponent {
  // object for signup
  signupObj: any = {

    "firstName": "",
    "lastName": "",
    "email": "",
    "password": "",
    "contactNumber": "",
    "address": "",
    "role": "user"
  };


  validationErrors: any[] = []; // Validation errors array
  suggestions: any[] = []; // To hold address suggestions


  constructor(
    private authsrv: AuthService,
    private router: Router,
    private http: HttpClient,
    private ngZone: NgZone
  ) { }

  // for password show hide icon
  showPassword = false;
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  ngOnInit(): void { }

  // http = inject(HttpClient);


  // Function to get address suggestions from Nominatim API
  onAddressInput(query: string) {
    if (query.length > 2) {
      const apiUrl = `https://nominatim.openstreetmap.org/search?q=${query}+pokhara&format=json&addressdetails=1&limit=5`;
      this.http.get(apiUrl).subscribe((response: any) => {
        this.ngZone.run(() => {
          this.suggestions = response;
        });
      });
    } else {
      this.suggestions = [];
    }
  }
  // Handle address input change
  handleAddressInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.onAddressInput(inputElement.value);
    }
  }

  // Function to select address from the suggestions list
  selectSuggestion(suggestion: any) {
    // Set the selected suggestion to the signup object
    this.signupObj.address = suggestion.display_name;

    // Clear the suggestions after selection
    this.suggestions = [];

    console.log('Selected Address:', this.signupObj.address);
    console.log('Latitude:', suggestion.lat, 'Longitude:', suggestion.lon);
  }

   // Event Listener for clicking outside the suggestions box
   @HostListener('document:click', ['$event'])
   handleOutsideClick(event: MouseEvent) {
     const clickedElement = event.target as HTMLElement;
 
     // Close the suggestions if clicked outside the address input or suggestion box
     if (
       clickedElement &&
       !clickedElement.closest('.suggestions-list') &&
       clickedElement.id !== 'address-input'
     ) {
       this.suggestions = [];
     }
   }
 

  onSignUp() {
    //this line to inspect the signup object before making the API call
    console.log('Signup Object:', this.signupObj);

    this.authsrv.createUser(this.signupObj).subscribe({
      next: (res) => {

        console.log('Signup successful', res);
        // Navigate to the search page after successful signup
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Signup failed', err);
        // Handle validation errors
        if (err.status === 400 && err.error.errors) {
          this.validationErrors = Object.values(err.error.errors).flat();
          console.error('Validation errors:', this.validationErrors);
        } else if (err.status === 500) {
          console.error('Internal server error:', err.error);
        } else {
          console.error('Unexpected error:', err);
          this.validationErrors = ['An unexpected error occurred. Please try again later.'];
        }
      }
    });
  }
}


