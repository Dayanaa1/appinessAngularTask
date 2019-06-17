import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShopeDetailsComponent} from './shope-details/shope-details.component'

const routes: Routes = [
  {path:'shopes',component:ShopeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopeManagementRoutingModule { }
