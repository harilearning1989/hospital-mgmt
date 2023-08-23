import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CreateComponent} from "../../../components/patient/create/create.component";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  { path: '', component: CreateComponent }
];

@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class CreateModule { }
