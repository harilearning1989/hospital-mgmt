import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../components/home/home.component';
import {RouterModule, Routes} from "@angular/router";

const pageNotFoundModule = () => import('../page-not-found/page-not-found.module').then(x => x.PageNotFoundModule);

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path: '**', data: {title: 'Page Not Module'}, loadChildren: pageNotFoundModule}
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class HomeModule { }
