import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from '../services/hotel.service';
import { FormControl, ReactiveFormsModule, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
    selector: 'hotel-add',
    templateUrl: '../resources/hotel-add.component.html',
    styleUrls: ['../resources/styles/hotel-add.component.less']
})
export class HotelAddComponent implements OnInit {

   
    constructor(private router: Router, private api: HotelService, private formBuilder: FormBuilder) { }
  
    hotelForm: FormGroup;
    name:string='';
    description:string='';
    isLoadingResults = false;
  
    ngOnInit() {
      this.hotelForm = this.formBuilder.group({
        'name' : [null, Validators.required],
        'description' : [null, Validators.required],
        'address' : [null, Validators.required]
      });
    }
  
    onFormSubmit(form:NgForm) {
      this.api.addHotel(form)
        .subscribe(res => {
            let id = res['id'];
            this.router.navigate(['/hotels']);
          }, (err) => {
            console.log(err);
          });
    }

    handleCLick(){
      
      console.log("entra")
    }
}