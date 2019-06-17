import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators,FormControl} from '@angular/forms';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';
import {User} from '../user';
import {UserService} from '../user.service'

const moment = _moment;

@Component({
  selector: 'app-uaer-add',
  templateUrl: './uaer-add.component.html',
  styleUrls: ['./uaer-add.component.scss'],
  providers: [ {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
  {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
],
})
export class UaerAddComponent implements OnInit {
  private hideNewUser:boolean=false;
  private hideEditUser:boolean=false;

  userForm:FormGroup;
  user :User;
  SelectUser:User;
//   course:string[]=[
// 'C','C++','Java','Meanstack',''
//   ]
courses: string[] = [
  'Java','C','C++','Nodejs','Angular','MeanStack'
];
  constructor(private fb:FormBuilder, private userService:UserService) { 
    
    this.userForm=this.fb.group({
      name: new FormControl('', [Validators.required,Validators.minLength(4)]),
      commands:new FormControl('', [Validators.required,Validators.minLength(20)]),
      course:new FormControl('', [Validators.required]),
      age:new FormControl('', [Validators.required, Validators.maxLength(3)]),
      date :new FormControl(moment([2019, 6, 6])),
      s_url:new FormControl('', [Validators.required]),
      email :['', [Validators.required, Validators.email]],
   })

    
  }

  ngOnInit() {
    this.getUserRecord()
  }
  onSubmitUser(user){
    this.userService.addEmployee(user)
    // .subscribe(res=>{console.log(res),
    //    localStorage.setItem('key', JSON.stringify(user));

      console.log(user)
    }

    getUserRecord():void{
      this.userService.getUser().subscribe
      (res=>this.user=res)
    }

    // getUserRecord(){
    //   this.user=this.userService.getTasks()
    // }
    
    onSelectUser(user:any){
      this.onSelectUser=user;
      this.hideNewUser=false;
      this.hideEditUser=true;
    }

    getUserDetails(){
      // this.getUserRecord();
      return this.user;
    }

    newCustomer(){
      this.hideNewUser=true;
      this.hideEditUser=false;
    }

}
