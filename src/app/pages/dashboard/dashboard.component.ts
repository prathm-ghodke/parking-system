import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { MasterService } from '../../services/master.service';
import { ISite, ResponseModel } from '../../model/user.model';


@Component({
  selector: 'app-dashboard',
  imports: [MatIconModule, MatCardModule, MatDividerModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
    TotalSpots: Number = 0;
    availableSpots: Number = 90;
    occupiedSpots: Number = 10;
    occupiedSpotsRate: Number = 10;

    masterService = inject(MasterService);
    siteList: ISite[] =[];
    buildingList: any[] =[];
    floorList: any[] =[];
    parkingSpots: any;
    siteID: number = 0;
    buildingId: number = 0;
    floorId: number = 0;
    
    ngOnInit(): void {
      this.getSites();
    }
    
    getSites(){
      this.masterService.getSitesByClientId().subscribe((res: ResponseModel) => {
        this.siteList = res.data;
      });
    }
    getBuilding(){
      if(this.siteID){
        this.masterService.getBuildingBysiteId(this.siteID).subscribe((res: any) => {
          this.buildingList = res.data;
        });
      }
    }
    getFloorByBuilding(){
      if(this.buildingId){
        this.masterService.getFloorByBuildingId(this.buildingId).subscribe((res: any) => {
          this.floorList = res.data;
        });
      }
    }
    onFloorSelect(){
      this.parkingSpots = []
      const floor = this.floorList.find((f:any) => f.floorId == this.floorId);
      for(let index = 0; index < floor.totalParkingSpots; index++){
        this.TotalSpots = floor.totalParkingSpots;
        this.parkingSpots.push(index)
      }
    }
}
