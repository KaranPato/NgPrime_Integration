import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEditEmployeeComponent } from './components/add-edit-employee/add-edit-employee.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    LoginComponent,
    EmployeeListComponent,
    AddEditEmployeeComponent
  ],
  imports: [
    LayoutRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class LayoutModule { }
