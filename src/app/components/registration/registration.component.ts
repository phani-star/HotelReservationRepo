import { Component } from '@angular/core';

import { UserService } from 'src/app/services/user.service';

import { Router } from '@angular/router';

 

@Component({

  selector: 'app-registration',

  templateUrl: './registration.component.html',

  styleUrls: ['./registration.component.css']

})

export class RegistrationComponent {

  user = {

    firstName: '',

    lastName: '',

    email: '',

    password: '',

    phoneNumber: '',

    address:''

  };
  //router: any;

 

  constructor(private userService: UserService, private router:Router) {}

 

  onSubmit() {

    // Call the user service to register the user

    if(this.user.firstName.length!=0&&this.user.lastName.length!=0&&this.user.email.length!=0&&this.user.password.length>=10&&this.user.phoneNumber.length==10&&this.user.email.includes('@')&&this.user.email.includes('.'))
    this.userService.register(this.user).subscribe(

      (response: any) => {

        console.log('User registered successfully:', response);
        this.router.navigate(['/login']);
        
      },

      (error: any) => {

        console.error('Registration failed:', error);

        

      }

    );

  }

}