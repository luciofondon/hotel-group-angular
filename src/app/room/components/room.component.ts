import { Component, OnInit } from '@angular/core';
import { RoomService } from '../services/room.service';
import { Room } from '../models/room.model';

@Component({
    selector: 'room',
    templateUrl: '../resources/room.component.html',
    styleUrls: ['../resources/styles/room.component.less']
})
export class RoomComponent implements OnInit {

    constructor(private api: RoomService) { }

    data: Room[] = [];

    ngOnInit() {
        this.getRooms();
    }
    
    getRooms(){
        this.api.getAllRooms()
          .subscribe(res => {
            this.data = res;
            console.log(this.data);
          }, err => {
            console.log(err);
          });
    }
}