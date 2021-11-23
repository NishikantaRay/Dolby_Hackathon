import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  data:any=[{
    dname:"Nishikanta Ray",
    dimg:"https://avatars.githubusercontent.com/u/62615392?v=4",
    dpos:"Frontend Developer",
    ddetails:"Walking on water and developing software from a specification are easy if both are frozen."
  },
  {
    dname:"Sunil Panda",
    dimg:"https://avatars.githubusercontent.com/u/57309465?v=4",
    dpos:"Backend Developer",
    ddetails:"Debugging is twice as hard as writing the code in the first place.Therfore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it. - Rajanand"
  },
  {
    dname:"Ayush Mohanty",
    dimg:"https://pbs.twimg.com/profile_images/1411970500562092035/VCUGq_L0_400x400.jpg",
    dpos:"Web Developer || Crypto Trader",
    ddetails:"Cricket Analyst || Web Developer || Crypto Trader"
  },
  {
    dname:"Sumeet Naik",
    dimg:"https://avatars.githubusercontent.com/u/25149022?v=4",
    dpos:"All Rounder",
    ddetails:"This is a wider card with supporting text below as a natural lead-in to additional content.This card has even longer content than the first to show that equal height action."
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
