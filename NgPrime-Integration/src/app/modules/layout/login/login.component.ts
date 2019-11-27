import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Messages } from 'src/app/common/messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;

  selectedValues: string[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  login() {
    this.submitted = true;

    if (this.loginForm.invalid)
      return;

    this.router.navigate(['layout']);
    this.toastr.success(Messages.loginSuccess, "Success");

    // If you wanna test login functionality you can try testing and commenting out the below code.
    // Please use below credentials
    // username: eve.holt@reqres.in
    // password: cityslicka


    // const data = {
    //   email: this.loginForm.controls.username.value,
    //   password: this.loginForm.controls.password.value
    // }

    // this.userService.login(data).subscribe((data: any) => {
    //   if (data !== null) {
    //     localStorage.setItem('token', data.token);
    //     this.router.navigate(['layout']);
    //     this.toastr.success("Login Successful", "Success");
    //   }
    // },
    //   (err: HttpErrorResponse) => {
    //     this.toastr.error(err.message, "Error");
    //   });
  }

}
