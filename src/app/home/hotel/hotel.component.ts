import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  constructor() { }
 array:any={
    img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/2c/a4/83/golden-blue-front-sea.jpg?w=200&h=200&s=1",
    name:"Hotel Petal Regency",
    details:"Akshaya Dham Chowk, Goudabada Sahi, Near Sea Beach, Puri 752001 India || Free parking || Free High Speed Internet (WiFi) || Free breakfast",
    price:"RS-1200/night"
 };
  ngOnInit(): void {
  }

}
