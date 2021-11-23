import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder } from '@angular/forms';
import { BookingService } from 'src/app/booking.service';
@Component({
  selector: 'app-liveform',
  templateUrl: './liveform.component.html',
  styleUrls: ['./liveform.component.css']
})
export class LiveformComponent implements OnInit {
  public message!:string;
  public isError:boolean=false;
  public isSuccess:boolean=false;
  profileForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    fordate: ['', Validators.required],
    fortime: ['', Validators.required]
  })
  constructor(private fb: FormBuilder,private _userService:BookingService) { }
  onSubmit(){
    console.warn(this.profileForm.value);
    this._userService.registerfeed(this.profileForm.value).subscribe(Response=>{
      console.log(Response);
      this.message=Response.message;
      this.isSuccess=true;
      this.isError=false;
      },err=>{
        console.log(err);
        this.message=err.error.message;
        this.isSuccess=false;
        this.isError=true;
    })
  } 
  ngOnInit(): void {
  }

}
