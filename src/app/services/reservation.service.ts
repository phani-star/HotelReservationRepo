import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

 

@Injectable({

  providedIn: 'root'

})

export class ReservationService {

private baseUrl = 'http://localhost:8081'; // Replace with your Spring Boot API URL

 

  constructor(private http: HttpClient) {}

 

  // Delete a reservation by reservationId 

  deleteReservation(reservationId: number): Observable<any> {

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    
    // delete 
    return this.http.delete(`${this.baseUrl}/reservation/delete/${reservationId}`, {headers: headers});

  }

 // new reservation
 makeReservation(reservation: any): Observable<any> { 
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post(`${this.baseUrl}/reservation/add`, reservation, { headers ,responseType:'text'}); 
}

//get all
getReservations(): Observable<any[]> {
  const url = `${this.baseUrl}/reservation/all`; 
  return this.http.get<any[]>(url);
}

 

}