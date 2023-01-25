import { ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, ValidationErrors,Validators, MinLengthValidator, MaxLengthValidator, EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-newsletter-form',
  templateUrl: './newsletter-form.component.html',
  styleUrls: ['./newsletter-form.component.scss'],
})
export class NewsletterFormComponent implements OnInit {
  favoriteColor = '';
  @ViewChild('signUpForm') form: NgForm;

  reactiveForm: FormGroup;
  isSubmitted: boolean = false ;

  onSubmit() {
    console.log(this.form);

    console.log(this.reactiveForm);
    this.isSubmitted = true;
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(null,[Validators.required, Validators.maxLength(50), Validators.minLength(3), Validators.pattern('[a-zA-Z0-9- ]*')]),
      email: new FormControl(null,[Validators.required, Validators.email] )
 
    });
   
  

   
  }
}
