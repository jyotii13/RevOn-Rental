import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  // userRegister(obj:any){
  //   return this.http.post("https://localhost:7275/api/Auth/register/user",obj)
  // }
}
