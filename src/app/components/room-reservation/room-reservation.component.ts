import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';
import { CustomerService } from 'src/app/services/customer.service'; // Import CustomerService
import { RoomService } from 'src/app/services/room.service'; // Import RoomService

@Component({
  selector: 'app-room-reservation',
  templateUrl: './room-reservation.component.html',
  styleUrls: ['./room-reservation.component.css']
})
export class RoomReservationComponent implements OnInit {
  reservation = {
    fromDate: '',
    toDate: '',
    customer: null, 
    room: null,
  };

  customers: any[] = []; 
  rooms: any[] = []; 

  constructor(
    private reservationService: ReservationService,
    private customerService: CustomerService,
    private roomService: RoomService, // Inject RoomService
    private router: Router
  ) {}

  ngOnInit() {
    this.customerService.getCustomers().subscribe((data: any) => {
      this.customers = data;
    });

    this.roomService.getRooms().subscribe((data: any) => {
      this.rooms = data;
    });
  }

  onSubmit() {
    
    this.reservationService.makeReservation(this.reservation).subscribe(
      (response: any) => {
        console.log('Room reserved successfully:', response);
        
        this.reservation = response;
        this.router.navigate(['/reservation-list']);
      },
      (error: any) => {
        alert("room is already reserved");
        console.error('Reservation failed:', error);
        
      }
    );
  }
}