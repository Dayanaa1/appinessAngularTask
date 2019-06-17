import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Employees } from './employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
employees:Employees[];
employ
  private _url="http://localhost:4200/assets/data/employee.json";
  private url="https://api.github.com/users/koushikkothagal"

  constructor(private http:HttpClient) { }

  getEmployees(){
    return this.http.get<Employees>(this._url);
  }
  // postEmployees(employee :Employees){
      // this.employees.push(employee);
//   this.employ=employee
//     localStorage.setItem('employ', JSON.stringify(employee));
// console.log(employee)

    // return this.http.post(this._url,employee)
    
  // }
  getTasks() {
    if(localStorage.getItem('employees') === null) {
      this.employees = [];
    } else {
      this.employees = JSON.parse(localStorage.getItem('employees'));
    }
    return this.employees;
  }

  addEmployee(employee: Employees) {
    // this.employees.push(employee);
    let employees = [];
    if(localStorage.getItem('employees') === null) {
      employees = [];
      employees.push(employee);
      localStorage.setItem('employees', JSON.stringify(employees));
    } else {
      employees = JSON.parse(localStorage.getItem('employees'));
      employees.push(employee); 
      localStorage.setItem('employees', JSON.stringify(employees));
    }
  }

  deleteEmployee(id){
    return this.http.delete(this._url)
  }
}
