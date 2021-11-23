import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-liveform',
  templateUrl: './liveform.component.html',
  styleUrls: ['./liveform.component.css']
})
export class LiveformComponent implements OnInit {
  profileForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    fordate: ['', Validators.required],
    fortime: ['', Validators.required]
  })
  constructor(private fb: FormBuilder) { }
  onSubmit(){
    console.warn(this.profileForm.value);
    
  }
  ngOnInit(): void {
  }

}
