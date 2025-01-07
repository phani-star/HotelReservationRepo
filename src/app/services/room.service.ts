import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

 

@Injectable({

  providedIn: 'root'

})

export class RoomService {

private baseUrl = 'http://localhost:8081'; // Replace with your Spring Boot API URL

 

  constructor(private http: HttpClient) {}

 

  

 

  // Get room details by ID

  getRoomDetails(roomId: number): Observable<any> {

    return this.http.get(`${this.baseUrl}/${roomId}`);

  }

  getRooms(): Observable<any[]> {
    const url = `${this.baseUrl}/room/all`; 
    return this.http.get<any[]>(url);
  }

  

}