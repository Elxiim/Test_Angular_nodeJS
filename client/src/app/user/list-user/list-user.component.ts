import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {}

  fetchUser() {
    this.userService.getUser().subscribe((response: any) => {
      this.users = response
      console.log(response)
    },
    error => {
      console.log(error)
    })
  }
}



