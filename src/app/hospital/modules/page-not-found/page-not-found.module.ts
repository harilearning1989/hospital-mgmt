import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageNotFoundComponent} from '../../components/page-not-found/page-not-found.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class PageNotFoundModule { }
