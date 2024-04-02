import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ModulesComponent } from './pages/modules/modules.component';
import { CrudComponent } from './pages/crud/crud.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'modules',
    component: ModulesComponent,
  },
  {
    path: 'crud',
    component: CrudComponent,
  },

  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
