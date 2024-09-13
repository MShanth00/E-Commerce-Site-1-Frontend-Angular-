import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {AdminLoginComponent} from "./admin-login/admin-login.component";

const routes: Routes = [
  { path: 'login', component: AdminLoginComponent },
  { path: 'dashboard', component: AdminDashboardComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
