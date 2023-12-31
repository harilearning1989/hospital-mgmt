import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateComponent} from '../../../components/appointment/create/create.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: '', component: CreateComponent}
];

@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule]
})
export class CreateModule { }
