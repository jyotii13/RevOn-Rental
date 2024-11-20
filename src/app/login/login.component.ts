// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { RouterLink, RouterOutlet, Router } from '@angular/router';
// import { signupModel } from '../usersignup/usersignup.component';


// @Component({
//   selector: 'app-login',
//   standalone: true,
//   imports: [FormsModule, RouterOutlet, RouterLink],
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })

// export class LoginComponent{
//   loginObj: loginModel = new loginModel()
//   constructor(private router: Router){}
//   onLogin(){
//     debugger;
//     const localusers = localStorage.getItem('users');
//     if(localusers != null){
//       const users = JSON.parse(localusers);
//       const isUserExist = users.find((user:signupModel)=> user.email == this.loginObj.email && user.password == this.loginObj.password);
//       if(isUserExist != undefined){
//         alert("User Found");
//         localStorage.setItem('loggedUser', JSON.stringify(isUserExist));
//         this.router.navigateByUrl('/search');
//       }
//       else{
//         alert("No user found");
//       }
//     }
//   }
// }
// export class loginModel{ 
//   email: string;
//   password: string;
//   constructor(){
//     this.email = "";
//     this.password = "";
//   }

// }


import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { LoginStateService } from '../services/login-state.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterOutlet, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loggedUserData:any;
  // object for login
  loginObj: any = {
    "email": "",
    "password": "",
  };
  constructor(
    private authsrv: AuthService,
    private router: Router,
    private loginStateService: LoginStateService
  ){}
  // for password show hide icon
  showPassword = false;
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  http = inject(HttpClient);

  onLogin(){
    console.log('Login Object:',this.loginObj);

      this.authsrv.loginUser(this.loginObj).subscribe({
        next: (res) =>{
          console.log('Signup successful', res);
          //set the login status to true
          this.loginStateService.setLoginStatus(true);
        // Navigate to the search page after successful signup
        this.router.navigate(['/search']);
        },
        error: (err) => {
        console.error('Login failed', err);
        if (err.error.errors) {
          console.log('Validation errors:', err.error.errors);
        } else {
          alert('Invalid email or password.');
        }
      }
      })
  }
  
}
//   loginObj: loginModel = new loginModel();
  
//   constructor(private router: Router, private authService: AuthService) {}
  
//   onLogin() {
//     const localusers = localStorage.getItem('users');
//     if (localusers != null) {
//       const users = JSON.parse(localusers);
//       //const isUserExist = users.find((user: signupModel) => user.email == this.loginObj.email && user.password == this.loginObj.password);
//       // if (isUserExist != undefined) {
//       //   // alert("User Found");
//       //  // this.authService.login(isUserExist);
//       //   this.router.navigateByUrl('/search');
//       // } else {
//       //   alert("No user found");
//       // }
//     }
//   }
// }

// export class loginModel {
//   email: string;
//   password: string;
//   constructor() {
//     this.email = "";
//     this.password = "";
//   }
// }