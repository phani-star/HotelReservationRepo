import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'http://localhost:8081'; 

  constructor(private http: HttpClient) {}

  

  // Get customer details by ID
  getCustomerById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/customer/${id}`);
  }

  // Get a list of all customers
  getCustomers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/customer/all`);
  }



 

}