import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopeManagementModule } from './shope-management/shope-management.module';
import {CountComponent} from './count/count.component'

const routes: Routes = [
  {path:'user',
loadChildren:'./user-management/user-management.module#UserManagementModule'},
{path:'employee',
loadChildren:'./employees/employees.module#EmployeesModule'},
{path:'shope',
loadChildren:'./shope-management/shope-management.module#ShopeManagementModule'},
{path:'count',component:CountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
