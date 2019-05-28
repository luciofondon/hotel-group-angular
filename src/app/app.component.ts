import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{

  items: MenuItem[];
    ngOnInit() {
        this.items = [
            {label: 'Hoteles', icon: 'pi pi-fw pi-sitemap', "routerLink": "/hotels"},
            {label: 'Habitaciones', icon: 'pi pi-fw pi-tag', "routerLink": "/rooms"}
        ];
    }
}
