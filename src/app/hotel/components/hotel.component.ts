import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from '../services/hotel.service';
import { Hotel } from '../../shared/models/hotel.model';
@Component({
    selector: 'hotel',
    templateUrl: '../resources/hotel.component.html',
    styleUrls: ['../resources/styles/hotel.component.less']
})
export class HotelComponent implements OnInit {

  constructor(private router: Router, private api: HotelService) { }
  
  displayedColumns: string[] = ['name', 'description', 'address'];
  data: Hotel[] = [];
  selectedHotel: Hotel;

  ngOnInit() {
    this.getHotels();
  }

  getHotels(){
    this.api.getHotels()
      .subscribe(res => {
        this.data = res;
        console.log(this.data);
      }, err => {
        console.log(err);
      });
  }

  deleteHotel(id) {
    this.api.deleteHotel(id)
      .subscribe(res => {
        this.getHotels();
        }, (err) => {
          console.log(err);
        }
      );
  }

  onRowSelect(event) {
    let id = event.data.id;
    this.router.navigate(['hotels/edit', id]);
  }
  
}