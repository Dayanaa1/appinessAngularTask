import { Component, OnInit } from '@angular/core';
import {Employees} from '../employees';
import {EmployeeService} from '../employee.service'

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {


   employees:Employees[];
  // public employees=[]
  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
  //  this.employeeService.getEmployees()
  //   .subscribe(res=>this.employees=res)
  this.employees=this.employeeService.getTasks()
  }


  deleteEmployee(id){
this.employeeService.deleteEmployee(id).subscribe((data:Employees[])=>{
this.employees=data;
console.log(data)
})
  }

}
