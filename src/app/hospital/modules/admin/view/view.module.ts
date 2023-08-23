import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from '../../../components/admin/view/view.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: ViewComponent}
];

@NgModule({
  declarations: [
    ViewComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class ViewModule { }
