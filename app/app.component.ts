import { Component, OnInit, Input } from '@angular/core';
import {StudentRecordService} from './student-record.service';
import {Student} from './student';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'appinessTask1';
  @Input() MarksValuealueChnaged:Student[];

   students:Student[];

  constructor(private studentRecordService:StudentRecordService){}

  ngOnInit(){
    this.getStudentRecord()
  }

  getStudentRecord(): void {
    this.studentRecordService.getStudentRecord().subscribe
               (studentdata => this.students = studentdata.sort(function (a, b) {
                //  console.log(studentdata)
      return a.Marks - b.Marks;
    }).reverse());
  }

  getTopperRecord(){
    return this.students.slice(0,5)
  }
  
  getMediocoreRecord(){
    return this.students.slice(5,10)
  }

  getLowerRecord() {
    // return this.students.slice(10);
    return this.students
  }
  trapValueChanged(value: Student) {
    // this.students.find(x => x.RollNo == value.RollNo).Marks = value.Marks;
    this.getStudentRecord();
  }
}
