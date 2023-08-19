import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const homeModule = () => import('./hospital/modules/home/home.module').then(x => x.HomeModule);
const pageNotFoundModule = () => import('./hospital/modules/page-not-found/page-not-found.module').then(x => x.PageNotFoundModule);

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '', data: {title: 'Home Module'}, loadChildren: homeModule},
  {path: '**', data: {title: 'Page Not Module'}, loadChildren: pageNotFoundModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
