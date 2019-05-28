import { NgModule } from '@angular/core';
import { HotelComponent } from './components/hotel.component';
import { HotelAddComponent } from './components/hotel-add.component';
import { HotelEditComponent } from './components/hotel-edit.component';

import { HotelService } from './services/hotel.service';
import { HotelRoutingModule } from './hotel-routing.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        HotelRoutingModule,
        TableModule,
        ButtonModule,
        PanelModule,
        InputTextModule,
        RatingModule,
        SharedModule
    ],
    declarations: [
        HotelComponent,
        HotelAddComponent,
        HotelEditComponent
    ],
    providers: [
        HotelService
    ],
    exports: [

    ]
})
export class HotelModule {

}
  