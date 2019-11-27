import { Component, OnInit, Inject } from '@angular/core';
import { User, UserData } from 'src/app/common/common';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { Messages } from 'src/app/common/messages';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  preserveWhitespaces: true
})
export class EmployeeListComponent implements OnInit {
  users: UserData[];
  cols: any[];
  userData: any;

  constructor(
    private userService: UserService,
    @Inject(ToastrService) private toastr
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((data: User) => {
      this.users = data.data;
    },
      (err: HttpErrorResponse) => {
        this.toastr.error(err.message, "Error");
      });

    this.cols = [
      { field: 'email', header: 'email' },
      { field: 'first_name', header: 'first_name' },
      { field: 'last_name', header: 'last_name' },
      { field: 'avatar', header: 'avatar' }
    ];
  }

  deleteEmployee(id: number) {
    if (id > 0) {
      this.userService.deleteEmployee(id).subscribe(() => {
        this.toastr.success(Messages.deleteSuccess);
      },
        (err: HttpErrorResponse) => {
          this.toastr.error(err.message, "Error");
        });
    } else {
      alert("Id not valid");
    }
  }

  getDetail(id: number) {
    if (id > 0) {
      this.userService.getUserById(id).subscribe((data: any) => {
        this.userData = data.data;
      },
        (err: HttpErrorResponse) => {
          this.toastr.error(err.message, "Error");
        });
    }
  }

}
