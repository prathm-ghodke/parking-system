import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MasterService } from '../../services/master.service';
import { ISite, ResponseModel } from '../../model/user.model';
import { LayoutComponent } from "../layout/layout.component";
import {MatDividerModule} from '@angular/material/divider';


@Component({
  selector: 'app-dashboard',
  imports: [MatIconModule, MatCardModule, FormsModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatGridListModule, LayoutComponent, MatDividerModule],
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
    parkingSpot: any;
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
      this.parkingSpot = []
      const floor = this.floorList.find((f:any) => f.floorId == this.floorId);
      for(let index = 0; index < floor.totalParkingSpots; index++){
        this.TotalSpots = floor.totalParkingSpots;
        this.parkingSpot.push(index)
      }
      console.log(floor);
    }
}
