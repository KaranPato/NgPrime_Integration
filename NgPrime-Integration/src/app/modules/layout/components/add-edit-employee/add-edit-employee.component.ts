import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css']
})
export class AddEditEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  data: any;

  constructor(
    private fb: FormBuilder,
    private userService: UserService) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }


  onSubmit() {

    if (this.employeeForm.invalid)
      return;

    this.data = {
      email: this.employeeForm.controls['email'].value,
      firstName: this.employeeForm.controls['firstName'].value,
      lastName: this.employeeForm.controls['lastName'].value,
    }

    this.userService.addUpdateUser(this.data).subscribe((data: any) => {
      console.log(data);
    },
      (err: HttpErrorResponse) => {
        
      })
  }

}
