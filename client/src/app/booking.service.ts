import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private _http:HttpClient) { }
  baseUrl:any="https://enigmatic-gorge-52415.herokuapp.com/";
  registerfeed(infos:any){
    return this._http.post<{message:string,infos:any}>(this.baseUrl+'hotel/bookConference',infos);
  }
  
}
