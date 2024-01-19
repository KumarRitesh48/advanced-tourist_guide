import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';
import { Place } from 'src/app/modal/place';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css']
})
export class AddPlaceComponent implements OnInit {
      place={
         name: '',area:'', image: '', distance: '', description: '',tag:''
      };

      
      constructor(private activatedRoute:ActivatedRoute,
        private adminService:AdminService,private toastr: ToastrService){
           
      }

      showSuccess() {
        this.toastr.success('Place Added Successfully', 'Success');
      }

      ngOnInit(): void {
        const id:string=this.activatedRoute.snapshot.params['id'];

            if(id !== undefined){
               console.log("edit view place",id)
               this.intializeInputFields(id);
            } 
            else{
              console.log("add view place")
            }
      }
       
      intializeInputFields(id:string) {
        
          
        this.adminService.getPlaceById(parseInt(id)).subscribe(p =>{
          this.place.description=p.description;
          this.place.distance=p.distance.toString()
          //this.place.id=p.id
          this.place.name=p.name
          this.place.image=p.image
        })
         
      }
      onFileSelected(event: any): void {
        const file = event.target.files[0];
       
        this.place.image = file.name;  
      }
      onSubmit() {
          
           //window.confirm("place is added")
           console.log("data ",this.place);
           this.adminService.addPlace(this.place).subscribe(
            () => {
              console.log('Place added successfully!');
              this.showSuccess(); // Call Toastr success message here
            },
            (error) => {
              // Handle error if needed
              console.error('Error adding place:', error);
            }
          );
           //formData.resetForm();
          
      }

}
 
