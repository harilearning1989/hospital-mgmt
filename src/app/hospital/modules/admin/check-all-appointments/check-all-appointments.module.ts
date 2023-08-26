import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  CheckAllAppointmentsComponent
} from '../../../components/admin/check-all-appointments/check-all-appointments.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: CheckAllAppointmentsComponent}
];
@NgModule({
  declarations: [
    CheckAllAppointmentsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class CheckAllAppointmentsModule { }
