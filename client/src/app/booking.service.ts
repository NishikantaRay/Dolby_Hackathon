import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private _http:HttpClient) { }
  baseUrl:any="";
  registerfeed(infos:any){
    return this._http.post<{message:string,infos:any}>(this.baseUrl+'/bookConference',infos);
  }
  
}
