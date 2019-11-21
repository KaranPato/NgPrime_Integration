import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css']
})
export class AddEditEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  data: any;
  employeeId: number;
  buttonText: string = "Add Employee";
  successMessage: string = "Added Successfully";

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    @Inject(ToastrService) private toastr,
    private router: Router,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });

    this.route.params.subscribe((data: any) => {
      this.employeeId = data['id'];
      if (this.employeeId > 0) {
        this.buttonText = "Update Employee";
        this.successMessage = "Updated Successfully";
        this.userService.getUserById(this.employeeId).subscribe((data: any) => {
          this.employeeForm.controls.email.setValue(data.data.email);
          this.employeeForm.controls.firstName.setValue(data.data.first_name);
          this.employeeForm.controls.lastName.setValue(data.data.last_name);
        });
      }
    });
  }


  onSubmit() {

    if (this.employeeForm.invalid)
      return;

    this.spinner.show();

    if (this.employeeId > 0) {
      this.data = {
        id: this.employeeId,
        email: this.employeeForm.controls['email'].value,
        firstName: this.employeeForm.controls['firstName'].value,
        lastName: this.employeeForm.controls['lastName'].value,
      }
    } else {
      this.data = {
        email: this.employeeForm.controls['email'].value,
        firstName: this.employeeForm.controls['firstName'].value,
        lastName: this.employeeForm.controls['lastName'].value,
      }
    }

    this.userService.addUpdateUser(this.data).subscribe((data: any) => {
      if (data !== null) {
        this.spinner.hide();
        this.toastr.success(this.successMessage, 'Success');
        this.router.navigate(['/layout']);
      }
    },
      (err: HttpErrorResponse) => {
        console.log(err);
        this.toastr.error(err.message, "Error");
      });
  }

}
