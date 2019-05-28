import { NgModule } from '@angular/core';
import { RoomComponent } from './components/room.component';
import { RoomService } from './services/room.service';
import { RoomRoutingModule } from './room-routing.module';
import { TableModule } from 'primeng/table';
import { BooleanTranslatePipe } from './pipes/boolean-translate.pipe';

@NgModule({
    imports: [
        RoomRoutingModule,
        TableModule
    ],
    declarations: [
        RoomComponent,
        BooleanTranslatePipe
    ],
    providers: [
        RoomService
    ],
    exports: [

    ]
})
export class RoomModule {

}
  