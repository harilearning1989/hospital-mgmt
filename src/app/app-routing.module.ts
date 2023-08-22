import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const homeModule = () => import('./hospital/modules/home/home.module').then(x => x.HomeModule);
const pageNotFoundModule = () => import('./hospital/modules/page-not-found/page-not-found.module').then(x => x.PageNotFoundModule);
const contactModule = () => import('./hospital/modules/contact/contact.module').then(x => x.ContactModule);
const aboutModule = () => import('./hospital/modules/about/about.module').then(x => x.AboutModule);
const patientModule = () => import('./hospital/modules/patient/patient.module').then(x => x.PatientModule);
const loginModule = () => import('./hospital/modules/login/login.module').then(x => x.LoginModule);

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '', data: {title: 'Home Module'}, loadChildren: homeModule},
  {path: 'about', loadChildren: aboutModule},
  {path: 'contact', loadChildren: contactModule},
  {path: 'patient', loadChildren: patientModule},
  {path: 'login', loadChildren: loginModule},
  {path: '**', data: {title: 'Page Not Module'}, loadChildren: pageNotFoundModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
