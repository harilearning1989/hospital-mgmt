import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink, RouterModule, Routes} from "@angular/router";
import {CreateComponent} from "../../../components/doctor/create/create.component";

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
    RouterLink
  ],
  exports: [RouterModule]
})
export class CreateModule {
}
