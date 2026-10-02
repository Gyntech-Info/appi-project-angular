import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Crud } from './pages/crud/crud';
import { FacebookPixelGuard } from "./core/guards/facebook-pixel.guard";
import { GoogleAnalyticsGuard } from "./core/guards/google-analitics.guard";
import { CounterComponent } from "./pages/counter/counter.component";
import { DirectivesComponent } from "./pages/directives/directives.component";
import { SignalComponent } from "./pages/signal/signal.component";

export const routes: Routes = [
  {
    path: 'home',
    component: Home,
    canActivate: [FacebookPixelGuard, GoogleAnalyticsGuard]
  },
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: 'directives',
    component: DirectivesComponent
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
  {
    path: 'signal',
    component: SignalComponent
  },

  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
