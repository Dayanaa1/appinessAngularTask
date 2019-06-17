import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user'


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  outputs:['selectUser']
})
export class UserListComponent implements OnInit {

  @Input() userData:User[];
  public selectUser=new EventEmitter();
  public deleteUserEvent=new EventEmitter()
  user:User[]
  displayedColumns = ['_id','name', 'commands', 'course', 'age', 'date','s_url','email', 'actions'];
  // userData:{}
  constructor(private userService:UserService) { }

  ngOnInit() {
  }

// getList(){
// this.userService.getUser().subscribe((data:User[])=>{
// console.log(data)
// })
// }

onSelect(userData:User){
  this.selectUser.emit(userData)
}

deleteUser(userData:User){
this.deleteUserEvent.emit(userData)
}

}
