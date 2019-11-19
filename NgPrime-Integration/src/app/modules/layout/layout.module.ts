import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    LayoutComponent,
    LoginComponent,
    EmployeeListComponent],
  imports: [
    LayoutRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ]
})
export class LayoutModule { }
