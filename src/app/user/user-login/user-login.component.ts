import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

      model:any = { username: '', password: '' };
      errorMessage: string = ' ';
      
       constructor(private authService:AuthService,private router:Router){

       }

       onSubmit() {
        // Call your authentication service method to authenticate the user
        this.authService.userLogin(this.model.username, this.model.password)
          .subscribe((result) => {
            if (result) {
              // Authentication successful, redirect or perform actions
              console.log('Authentication successful');
            } else {
              // Authentication failed, handle error or show a message
              console.log('Authentication failed');
            }
            
          });
      }

}
