import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmpLoginComponent } from './emp-login/emp-login.component';
import { SecurityLoginComponent } from './security-login/security-login.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { AddSecurityComponent } from './add-security/add-security.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { ViewSecurityComponent } from './view-security/view-security.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchEmpComponent } from './search-emp/search-emp.component';
import { SearchSecurityComponent } from './search-security/search-security.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';

const myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"emplogin",
    component:EmpLoginComponent
  },
  {
    path:"securitylogin",
    component:SecurityLoginComponent
  },
  {
    path:"addemp",
    component:AddEmpComponent
  },
  {
    path:"addsecurity",
    component:AddSecurityComponent
  },
  {
    path:"viewemp",
    component:ViewEmployeesComponent
  },
  {
    path:"viewsecurity",
    component:ViewSecurityComponent
  },
  {
    path:"searchemp",
    component:SearchEmpComponent
  },
  {
    path:"searchsecurity",
    component:SearchSecurityComponent
  }
  
]

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    EmpLoginComponent,
    SecurityLoginComponent,
    AddEmpComponent,
    AddSecurityComponent,
    NavbarComponent,
    ViewEmployeesComponent,
    ViewSecurityComponent,
    SearchEmpComponent,
    SearchSecurityComponent,
    UpdateEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
