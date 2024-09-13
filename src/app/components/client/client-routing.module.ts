import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientLoginComponent} from "./client-login/client-login.component";
import {ClientDashboardComponent} from "./client-dashboard/client-dashboard.component";

const routes: Routes = [
  { path: 'login', component: ClientLoginComponent },
  { path: 'dashboard', component: ClientDashboardComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
