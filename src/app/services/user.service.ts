import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

 

@Injectable({

  providedIn: 'root'

})

export class UserService {

private baseUrl = 'http://localhost:8081'; 
  

 

  constructor(private http: HttpClient) {}

 

  // User registration

  register(user: any): Observable<any> {

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

return this.http.post(`${this.baseUrl}/customer/add`, user, { headers,responseType:'text' });

  }

 

  // User login

  login(user:any): Observable<any> {

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

return this.http.post(`${this.baseUrl}/customer/login`, user, { headers });

  }

  

  
}