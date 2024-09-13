import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: 'admin', loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule) },
  { path: 'client', loadChildren: () => import('./components/client/client.module').then(m => m.ClientModule) },
  { path: '', redirectTo: 'client/dashboard', pathMatch: 'full' }
];
