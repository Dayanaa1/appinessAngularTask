import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {
count=0;
dislike=0;
  constructor() { }

  ngOnInit() {
  }

  incrementCount(){
this.count +=1;
  }

  decrease(){
this.dislike +=1
  }

}
