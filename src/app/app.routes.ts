import { Routes } from '@angular/router';

import { AppAddComponent, AppViewComponent, AppPageNotFoundComponent } from './app.addview.component';


export const routes: Routes = [
  { path: 'add', component: AppAddComponent },
  { path: 'view', component: AppViewComponent },
  { path: '',   redirectTo: '/add', pathMatch: 'full' },    /*Default route*/
  { path: '**', component: AppPageNotFoundComponent }       /*Wildcard route*/
];
