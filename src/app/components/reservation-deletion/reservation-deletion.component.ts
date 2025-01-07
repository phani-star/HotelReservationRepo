import { Component } from '@angular/core';

import { ReservationService } from 'src/app/services/reservation.service'; 

 

@Component({

  selector: 'app-reservation-deletion',

  templateUrl: './reservation-deletion.component.html',

  styleUrls: ['./reservation-deletion.component.css']

})

export class ReservationDeletionComponent {

  reservation = {

    reservationId: 0

  };

 

  constructor(private reservationService: ReservationService) {}

 

  onSubmit() {

    // Call the reservation service to delete the reservation

    this.reservationService.deleteReservation(this.reservation.reservationId).subscribe(

      (response: any) => {

        console.log('Reservation deleted successfully:', response);

        // Optionally, navigate to another page after successful deletion

      },

      (error: any) => {

        console.error('Deletion failed:', error);

        // Handle deletion error (e.g., display an error message)

      }

    );

  }

}