import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent }          from './about/about.component';
import { HomeComponent }          from './home/home.component';
import { ButtonComponent }          from './button/button.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'button', component: ButtonComponent },
  { path: '',  redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging 
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }