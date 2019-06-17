import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs'
import { of } from 'rxjs/observable/of';
import {userMock} from './userMockData'


@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:User[];

  private url="http://localhost:4200/assets/data/employee.json"
  constructor(private httpClient:HttpClient) { }

  // postUser(user){
  //   return this.httpClient.post(this._url, JSON.stringify(user));  }

   addEmployee(employee: User) {
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


  getTasks() {
    if(localStorage.getItem('user') === null) {
      this.user = [];
    } else {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
    return this.user;
  }
//   getUser():Observable<User[]>{
//  return of(userMock)
//   }

getUser(){
  return this.httpClient.get<User>(this.url)
}
}
