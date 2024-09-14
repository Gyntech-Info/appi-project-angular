import { Routes } from "@angular/router";
import { Clients } from "./clients/clients.component";

export default [
  { path: 'clients', component: Clients },
  { path: '', pathMatch: 'full', redirectTo: 'clients' }
] satisfies Routes