import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UpdateComponent} from '../../../components/appointment/update/update.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: UpdateComponent}
];
@NgModule({
  declarations: [
    UpdateComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class UpdateModule { }
