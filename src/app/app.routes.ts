import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Modules } from './pages/modules/modules';
import { Crud } from './pages/crud/crud';

export const routes: Routes = [
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'modules',
    component: Modules,
  },
  {
    path: 'crud',
    component: Crud,
  },

  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
