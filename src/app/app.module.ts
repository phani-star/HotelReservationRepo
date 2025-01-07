import{FormsModule} from '@angular/forms';

import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { RegistrationComponent } from './components/registration/registration.component';

import { LoginComponent } from './components/login/login.component';

import { RoomReservationComponent } from './components/room-reservation/room-reservation.component';

import { ReservationDeletionComponent } from './components/reservation-deletion/reservation-deletion.component';

import { ReservationListComponent } from './components/reservation-list/reservation-list.component';
import { AppRoutingModule } from './app-routing.module';


 

@NgModule({

  declarations: [

    AppComponent,

    RegistrationComponent,

    LoginComponent,

    RoomReservationComponent,

    ReservationDeletionComponent,
    
     ReservationListComponent,
         

    // Add other components here

  ],

  imports: [

    BrowserModule,

    FormsModule,

    HttpClientModule,

    AppRoutingModule

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule {}