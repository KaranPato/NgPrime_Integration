import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/common';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  users: User[];
  cols: any[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data.data;
    });

    this.cols = [
      { field: 'email', header: 'email' },
      { field: 'first_name', header: 'first_name' },
      { field: 'last_name', header: 'last_name' },
      { field: 'avatar', header: 'avatar' }
    ];
  }

}
