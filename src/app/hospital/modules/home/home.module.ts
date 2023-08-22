import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from '../../components/home/home.component';
import {RouterModule, Routes} from "@angular/router";

const contactModule = () => import('../contact/contact.module').then(x => x.ContactModule);
const aboutModule = () => import('../about/about.module').then(x => x.AboutModule);
const pageNotFoundModule = () => import('../page-not-found/page-not-found.module').then(m => m.PageNotFoundModule);

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home', component: HomeComponent,
    children: [
      {path: 'about', loadChildren: aboutModule},
      {path: 'contact', loadChildren: contactModule},
      {path: '', loadChildren: aboutModule},
      {path: '**', data: {title: 'Page Not Module'}, loadChildren: pageNotFoundModule}
    ]
  }
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
export class HomeModule {
}
