import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ShopeService} from '../shope.service'
import {Shope} from '../shope'

@Component({
  selector: 'app-shope-details',
  templateUrl: './shope-details.component.html',
  styleUrls: ['./shope-details.component.scss']
})
export class ShopeDetailsComponent implements OnInit {

  @Input() shopeData:Shope[]
  @Output() newShopeValue=new EventEmitter()
shopes:Shope[];
  constructor(private shopeService:ShopeService) { }

  ngOnInit() {
    // this.getDetails()
  }

  onShope(newData:Shope){
this.newShopeValue.emit(newData)
  }

//   getDetails(): void{
//     this.shopeService.getShope().subscribe
//     (shopeData=>this.shopes=shopeData.sort(function(a,b){
// return a.age -  b.age
//     }).reverse())
//   }

}
