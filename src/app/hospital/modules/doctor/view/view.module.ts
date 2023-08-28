import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewComponent} from '../../../components/doctor/view/view.component';
import {RouterModule, Routes} from "@angular/router";
import {HistoryModule} from "../history/history.module";

const routes: Routes = [
  {path: '', component: ViewComponent}
];
@NgModule({
  declarations: [
    ViewComponent
  ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        HistoryModule
    ],
  exports: [RouterModule]
})
export class ViewModule { }
