import { Component,OnInit } from '@angular/core';


import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { DubCheck } from './validateName';
import { PasswordValidation } from './validatePass';



const mailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  register:FormGroup
  constructor(private fb:FormBuilder,private val:DubCheck){}

  ngOnInit() {
    this.register=this.fb.group({
      mail:['',[Validators.required,Validators.pattern(new RegExp(mailRegex)),this.checkMail.bind(this)]],
      name:['',[Validators.required,Validators.maxLength(20),Validators.minLength(3)]],
      auth:this.fb.group({
        password:['',[Validators.required]],
        confirmPassword:['',[Validators.required]]
      },{
        validator:PasswordValidation.MatchPassword
      }),
      address:['',[Validators.required]],
      city:['',[]],
      country:['',[]],
      zip:['',[]]
    })
  }

  checkMail(v){
    return this.val.validateMail(v.value)?{dublicate:true}:null
  }

  submit(a){
    console.log(a);
    
  }
}
