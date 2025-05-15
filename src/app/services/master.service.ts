import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  getSitesByClientId(): Observable<ResponseModel> {
    const clientID = 1;
    return this.http.get<ResponseModel>("https://api.freeprojectapi.com/api/SmartParking/GetSitesByClientId?id="+clientID);
  }
}
