import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientComponent } from '../../components/patient/patient.component';
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  { path: '', component: PatientComponent }
];

@NgModule({
  declarations: [
    PatientComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class PatientModule { }
