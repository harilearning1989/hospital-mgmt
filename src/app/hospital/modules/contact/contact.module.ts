import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactComponent} from '../../components/contact/contact.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {  path: '', component: ContactComponent }
];

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class ContactModule {
}
