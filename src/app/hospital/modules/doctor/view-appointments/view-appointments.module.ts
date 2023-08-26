import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewAppointmentsComponent} from '../../../components/doctor/view-appointments/view-appointments.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: ViewAppointmentsComponent}
];

@NgModule({
  declarations: [
    ViewAppointmentsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class ViewAppointmentsModule { }
