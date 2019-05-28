import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomComponent } from './components/room.component';

const routes: Routes = [
  {
    path: '',
    component: RoomComponent,
    data: { title: 'List of rooms' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomRoutingModule {

}
