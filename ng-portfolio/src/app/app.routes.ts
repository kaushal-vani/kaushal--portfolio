import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../stories/home-page/home-page.component';
import { AboutPageComponent } from '../stories/about-page/about-page.component';

export const routes: Routes = [
  { path: '', component: AboutPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutes {}
