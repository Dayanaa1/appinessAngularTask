import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators,FormControl} from '@angular/forms';
import {Employees} from '../employees';
import {EmployeeService} from '../employee.service'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  loginText = 'Login';
  signUpText = 'Sign Up'; 
  lessons = ['Lesson 1', 'Lessons 2'];

  login() {
      console.log('Login');
  }

  signUp() {
      console.log('Sign Up');
  }
 getColor(country){(2)
switch(country){
  case 'Uk':
    return 'green';
    case 'USA':
      return 'red';
      case 'HK':
        return 'blue'
}
}



  ngOnInit() {
  }
  // onSubmitEmployee(employees:Employees){
// this.employeeService.postEmployees(employees)
// .subscribe(res=>{
// console.log(employees)
// })
// this.employeeService.addEmployee(employees)
//   }


  
people: any[] = [
  {
    "name": "Douglas  Pace",
    "country": 'UK'
  },
  {
    "name": "Mcleod  Mueller",
    "country": 'USA'
  },
  {
    "name": "Day  Meyers",
    "country": 'HK'
  },
  {
    "name": "Aguirre  Ellis",
    "country": 'UK'
  },
  {
    "name": "Cook  Tyson",
    "country": 'USA'
  }
];

// employeeFrom:FormGroup;
// employees:Employees[]=[]
constructor(private fb:FormBuilder, private employeeService:EmployeeService) { 

//     this.employeeFrom=this.fb.group({
// name:new FormControl(''),
// age:(""),
// course:("")
//     })
 }

 }
