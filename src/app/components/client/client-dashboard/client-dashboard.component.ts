import { Component } from '@angular/core';
import {ClientHeaderComponent} from "../client-header/client-header.component";
import {ClientFooterComponent} from "../client-footer/client-footer.component";

@Component({
  selector: 'app-client-dashboard',
  standalone: true,
  imports: [
    ClientHeaderComponent,
    ClientFooterComponent
  ],
  templateUrl: './client-dashboard.component.html',
  styleUrl: './client-dashboard.component.scss'
})
export class ClientDashboardComponent {

}
