import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  createUser(signupObj:any): Observable<any>{
    return this.http.post("http://localhost:5199/api/Auth/register/user",signupObj,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text' // to handle non-JSON responses (Expecting text response from the server)
    })
  }

  loginUser(loginObj:any): Observable<any>{
    return this.http.post("http://localhost:5199/api/Auth/login",loginObj,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text'

    })
  }

  
}
