import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  API_URL = "https://api.freeprojectapi.com/api/SmartParking/";

  getSitesByClientId(): Observable<ResponseModel> {
    const clientID = 1;
    return this.http.get<ResponseModel>(this.API_URL+"GetSitesByClientId?id="+clientID);
  }
  
  getBuildingBysiteId(siteID: number): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(this.API_URL+"GetBuildingBySiteId?id="+siteID);
  }
  getFloorByBuildingId(buildigID: number): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(this.API_URL+"GetFloorsByBuildingId?id="+buildigID);
  }
  getParkingSpotsByFloorId(floorId: number): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(this.API_URL+"GetAllParkingByFloor?id="+floorId);
  }

}
