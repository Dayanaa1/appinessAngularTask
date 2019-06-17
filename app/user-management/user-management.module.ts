import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UaerAddComponent } from './uaer-add/uaer-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import {MyNewRoutingModule} from './my-new-routing.module';
import {SharedModule} from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './user.service';




@NgModule({
  declarations: [UaerAddComponent, UserEditComponent, UserListComponent],
  imports: [
    CommonModule,
    MyNewRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule
    ],
    providers:[UserService]
})
export class UserManagementModule { }
