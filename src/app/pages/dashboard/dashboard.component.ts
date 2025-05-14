import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-dashboard',
  imports: [MatIconModule,MatCardModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
    TotalSpots: Number = 100;
    availableSpots: Number = 90;
    occupiedSpots: Number = 10;
    occupiedSpotsRate: Number = 10;

}
