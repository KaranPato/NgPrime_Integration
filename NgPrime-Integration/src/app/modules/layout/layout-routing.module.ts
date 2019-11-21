import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AddEditEmployeeComponent } from './components/add-edit-employee/add-edit-employee.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      { path: 'employee-list', component: EmployeeListComponent },
      { path: 'add-edit-employee/:id', component: AddEditEmployeeComponent },
      { path: '', redirectTo: 'employee-list', pathMatch: 'full' }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
