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
import { UpdateSecurityComponent } from './update-security/update-security.component';
import { ViewuserprofileComponent } from './viewuserprofile/viewuserprofile.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { EmpNavbarComponent } from './emp-navbar/emp-navbar.component';
import { LeaveStatusComponent } from './leave-status/leave-status.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { EmpLogEntryComponent } from './emp-log-entry/emp-log-entry.component';
import { SecurityLogComponent } from './security-log/security-log.component';
import { ViewSecurityProfileComponent } from './view-security-profile/view-security-profile.component';
import { SecurityNavbarComponent } from './security-navbar/security-navbar.component';
import { AddEmpLogEntryComponent } from './add-emp-log-entry/add-emp-log-entry.component';
import { AddVisitorLogEntryComponent } from './add-visitor-log-entry/add-visitor-log-entry.component';

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
  },
  {
    path:"updateemp",
    component:UpdateEmpComponent
  },
  {
    path:"updatesecurity",
    component:UpdateSecurityComponent
  },
  {
    path:"empprofile",
    component:ViewuserprofileComponent
  },
  {
    path:"leaveapply",
    component:LeaveApplicationComponent
  },
  {
    path:"leavestatus",
    component:LeaveStatusComponent
  },
  {
    path:"adminleaveupdate",
    component:LeaveRequestComponent
  },
  {
    path:"emplog",
    component:EmpLogEntryComponent
  },
  {
    path:"visitorlog",
    component:SecurityLogComponent
  },
  {
    path:"securityprofile",
    component:ViewSecurityProfileComponent
  },
  {
    path:"addemplogentry",
    component:AddEmpLogEntryComponent
  },
  {
    path:"addvisitorlogentry",
    component:AddVisitorLogEntryComponent
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
    UpdateEmpComponent,
    UpdateSecurityComponent,
    ViewuserprofileComponent,
    LeaveApplicationComponent,
    EmpNavbarComponent,
    LeaveStatusComponent,
    LeaveRequestComponent,
    EmpLogEntryComponent,
    SecurityLogComponent,
    ViewSecurityProfileComponent,
    SecurityNavbarComponent,
    AddEmpLogEntryComponent,
    AddVisitorLogEntryComponent
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
