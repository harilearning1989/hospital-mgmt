import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewComponent} from "../../../components/patient/view/view.component";
import {RouterModule, Routes} from "@angular/router";
import {DataTablesModule} from "angular-datatables";


const routes: Routes = [
  { path: '', component: ViewComponent }
];
@NgModule({
  declarations: [
    ViewComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    DataTablesModule
  ],
  exports: [RouterModule]
})
export class ViewModule { }
