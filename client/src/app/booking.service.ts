import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private _http:HttpClient) { }
  baseUrl:any="https://enigmatic-gorge-52415.herokuapp.com/hotel";
  registerfeed(infos:any){
    console.log(infos);
    
    return this._http.post<{message:string,infos:any}>(this.baseUrl+'/bookConference',infos);
  }
  
}
