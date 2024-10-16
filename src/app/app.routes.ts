import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Modules } from './pages/modules/modules';
import { Crud } from './pages/crud/crud';
import { FacebookPixelGuard } from "./core/guards/facebook-pixel.guard";
import { GoogleAnalyticsGuard } from "./core/guards/google-analitics.guard";

export const routes: Routes = [
  {
    path: 'home',
    component: Home,
    canActivate: [FacebookPixelGuard, GoogleAnalyticsGuard]
  },
  {
    path: 'modules',
    component: Modules,
  },
  {
    path: 'crud',
    component: Crud,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/crud/crud.routes')
      }
    ]
  },

  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
