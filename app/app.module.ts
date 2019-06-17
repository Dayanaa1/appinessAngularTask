import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {SharedModule} from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {UserManagementModule} from '../app/user-management/user-management.module';
import { MyNewRoutingModule } from './user-management/my-new-routing.module'
import {HttpClientModule} from '@angular/common/http';
import {EmployeesModule} from '../app/employees/employees.module';
import {StudentRecordService} from './student-record.service';
import { StudentDetailComponent } from './student-detail/student-detail.component'
import {ShopeManagementModule} from './shope-management/shope-management.module';
import { CountComponent } from './count/count.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentDetailComponent,
    CountComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    UserManagementModule,
    MyNewRoutingModule,
    HttpClientModule,
    EmployeesModule,
    ShopeManagementModule
  ],
  providers: [StudentRecordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
