import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    feed: ['', Validators.required]
  })
  constructor(private fb: FormBuilder) { }
  onSubmit(){
    console.warn(this.contactForm.value);
    
  }
  ngOnInit(): void {
  }

}
