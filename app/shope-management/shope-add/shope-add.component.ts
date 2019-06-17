import { Component, OnInit } from '@angular/core';
import {ShopeService} from '../shope.service';
import {Shope} from '../shope'

@Component({
  selector: 'app-shope-add',
  templateUrl: './shope-add.component.html',
  styleUrls: ['./shope-add.component.scss']
})
export class ShopeAddComponent implements OnInit {

  shopes:Shope[];

  constructor(private shopeService:ShopeService) { }

  ngOnInit() {
    this.getShope()
  }

  getShope():void{
    this.shopeService.getShope()
    .subscribe(shopeData=>this.shopes=shopeData)
  }

  getList(){
    return this.shopes;
  }

  

}
