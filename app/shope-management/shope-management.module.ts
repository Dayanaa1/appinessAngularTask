import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopeManagementRoutingModule } from './shope-management-routing.module';
import { ShopeAddComponent } from './shope-add/shope-add.component';
import { ShopeDetailsComponent } from './shope-details/shope-details.component';
import {ShopeService} from './shope.service'

@NgModule({
  declarations: [ShopeAddComponent, ShopeDetailsComponent],
  imports: [
    CommonModule,
    ShopeManagementRoutingModule
  ],
  providers:[ShopeService]
})
export class ShopeManagementModule { }
