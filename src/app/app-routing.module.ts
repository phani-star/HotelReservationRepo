import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

 

import { RegistrationComponent } from './components/registration/registration.component';

import { LoginComponent } from './components/login/login.component';

import { RoomReservationComponent } from './components/room-reservation/room-reservation.component';

import { ReservationDeletionComponent } from './components/reservation-deletion/reservation-deletion.component';

import { ReservationListComponent } from './components/reservation-list/reservation-list.component';

 

const routes: Routes = [

  { path: 'registration', component: RegistrationComponent },

  { path: 'login', component: LoginComponent },

  { path: 'room-reservation', component: RoomReservationComponent },

  { path: 'reservation-deletion', component: ReservationDeletionComponent },

  {path:'reservation-list', component:ReservationListComponent},


  { path: '', redirectTo: '/registration', pathMatch: 'full' }, // Default route

  { path: '**', redirectTo: '/registration' } 

];

 

@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule {}