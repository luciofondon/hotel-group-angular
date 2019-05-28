import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelComponent } from './components/hotel.component';
import { HotelAddComponent } from './components/hotel-add.component';
import { HotelEditComponent } from './components/hotel-edit.component';

const routes: Routes = [
  {
    path: '',
    component: HotelComponent,
    data: { title: 'List of Hotels' }
  },
  {
    path: 'add',
    component: HotelAddComponent,
    data: { title: 'List of Hotels' }
  },
  {
    path: 'edit/:id',
    component: HotelEditComponent,
    data: { title: 'List of Hotels' }
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelRoutingModule {

}
