import { Component, inject, OnInit} from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, Router } from '@angular/router';

import { CommonModule, NgClass, NgIf } from '@angular/common';

import { Subscription } from 'rxjs';
import { LoginStateService } from '../services/login-state.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive,CommonModule,NgClass,NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent{
  showProfileModal = false; // Initially hidden
  menuOpen: boolean = false;
  isLoggedIn: boolean = false;

  
// for menu
  toggleMenu(): void{
    this.menuOpen = !this.menuOpen;
  }
  //dependency injection
  constructor(
    private loginStateService: LoginStateService
  ){}
  //for login state
  ngOnInit():void {
    this.loginStateService.isLoggedIn.subscribe((status) =>{
      this.isLoggedIn = status;
    }); 
  }
  onLogout():void{
    this.loginStateService.logout();
  }

  

  userProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    imageUrl: 'assets/images/user-profile.png'
  };

  // Function to open the profile modal
  openProfileModal(): void {
    this.showProfileModal = true;
  }
  // Function to close the profile modal
  closeProfileModal(): void {
    this.showProfileModal = false;
  }

  editProfile(): void {
    alert('Edit profile feature is coming soon!');
  }
  
  

}
