import { Component } from '@angular/core';

import { UserService } from 'src/app/services/user.service';

import { Router } from '@angular/router';

@Component({

  selector: 'app-login',

  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css']

})

export class LoginComponent {

  user = {

    email: '',

    password: ''

  };

 

  constructor(private userService: UserService, private router:Router) {}

 

  onSubmit() {

    

    this.userService.login(this.user).subscribe(

      (response: any) => {

        console.log('User login successful:', response);

        this.router.navigate(['/room-reservation']);

        

      },

      (error: any) => {

        alert("invalid credentials");
        console.error('login failed:', error);

       

      }

    );

  }

}