import { Component, inject, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { MasterService } from '../../services/master.service';
import { ISite, ResponseModel } from '../../model/user.model';


@Component({
  selector: 'app-dashboard',
  imports: [MatIconModule,MatCardModule, MatDividerModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
    TotalSpots: Number = 100;
    availableSpots: Number = 90;
    occupiedSpots: Number = 10;
    occupiedSpotsRate: Number = 10;

    masterService = inject(MasterService);
    siteList: ISite[] =[];
    ngOnInit(): void {
      this.getSites();
    }
    
    getSites(){
      this.masterService.getSitesByClientId().subscribe((res: ResponseModel) => {
        this.siteList = res.data;
      });
    }
}
