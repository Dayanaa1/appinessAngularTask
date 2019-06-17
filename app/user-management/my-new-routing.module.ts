import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UaerAddComponent} from './uaer-add/uaer-add.component'


const routes: Routes = [
  {path:'userAdd',component:UaerAddComponent}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyNewRoutingModule { }
