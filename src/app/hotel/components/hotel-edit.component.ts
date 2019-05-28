import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../services/hotel.service';
import { Hotel } from '../../shared/models/hotel.model';
import { FormControl, ReactiveFormsModule, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
    selector: 'hotel-edit',
    templateUrl: '../resources/hotel-edit.component.html',
    styleUrls: ['../resources/styles/hotel-edit.component.less']
})
export class HotelEditComponent implements OnInit {
    constructor(private route: ActivatedRoute, private api: HotelService, private router: Router, private formBuilder: FormBuilder) { }

    hotel: Hotel = { id: 0, name: '', address: '', description: '', stars: 0 };
    hotelForm: FormGroup;
    id:number=0;
  
    ngOnInit() {
      this.getHotel(this.route.snapshot.params['id']);
      this.hotelForm = this.formBuilder.group({
        'name' : [null, Validators.required],
        'description' : [null, Validators.required],
        'address' : [null, Validators.required],
        'stars' : [null, Validators.required]
      });
    }
  
    getHotel(id) {
      this.api.getHotel(id).subscribe(data => {
        this.id = data.id;
        this.hotelForm.setValue({
          name: data.name,
          description: data.description,
          address: data.address,
          stars: data.stars
        });
      });
    }

    onFormSubmit(form:NgForm) {
      this.api.updateHotel(this.id, form)
        .subscribe(res => {
            let id = res['id'];
            this.router.navigate(['/hotels']);
          }, (err) => {
            console.log(err);
          }
        );
    }

    cancel(){
      this.router.navigate(['/hotels']);
    }


}