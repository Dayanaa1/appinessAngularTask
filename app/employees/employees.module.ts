import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import {SharedModule} from '../shared/shared.module'
import { EmployeesComponent } from './employees/employees.component';
import {EmployeeService} from './employee.service';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [EmployeesListComponent, EmployeesComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers:[EmployeeService]
})
export class EmployeesModule { }
