import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
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
