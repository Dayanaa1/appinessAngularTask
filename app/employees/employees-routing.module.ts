import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeesListComponent} from './employees-list/employees-list.component'
import {EmployeesComponent} from './employees/employees.component'

const routes: Routes = [
  {path:'employeeList',component:EmployeesListComponent},
  {path:'employeeAdd',component:EmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
