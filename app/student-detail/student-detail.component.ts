import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Student} from '../student'

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {


  @Input() studentsData: Student[];
  
  @Output() MarksValuealueChnaged = new EventEmitter();
  counter = 0;
  valueChnaged(newData: Student) {
    this.MarksValuealueChnaged.emit(newData);
  }
  constructor() { }

  ngOnInit() {
  }
 
}
