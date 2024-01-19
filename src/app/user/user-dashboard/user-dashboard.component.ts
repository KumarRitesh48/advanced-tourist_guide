import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/modal/place';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit{
        placeList:Place[]=[]
       constructor(private userService:UserService){

       }
       

       ngOnInit(): void {
        const data=localStorage.getItem('auth_token');
        console.log("Token  curr",data)
           this.userService.getPlaces().subscribe(data => {
               this.placeList=data
           })

           this.getTagsFromPlace();
       }

      getTagsFromPlace() {
        
      }


}
