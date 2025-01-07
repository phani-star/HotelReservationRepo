import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service'; // Import your ReservationService here

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {
  reservations: any[] = []; // Define an array to store reservations

  constructor(private reservationService: ReservationService, private router: Router) {}

  ngOnInit() {
    this.loadReservations();
  }

  loadReservations() {
    this.reservationService.getReservations().subscribe(
      (reservations: any[]) => {
        this.reservations = reservations;
      },
      (error: any) => {
        console.error('Error fetching reservations:', error);
      }
    );
  }

  

  deleteReservation(reservationId: number) {
    this.reservationService.deleteReservation(reservationId).subscribe(
      (response: any) => {
        console.log('Reservation deleted successfully:', response); 
      },
      (error: any) => {
        console.error('Error deleting reservation:', error);
        
      }
    );
  }
}