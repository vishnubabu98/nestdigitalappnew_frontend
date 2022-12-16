import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addEmployee=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/addemp",dataToSend)
   }
   addSecurity=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/addsecurity",dataToSend)
   }
   fetchEmployee=()=>{
    return this.http.get("http://localhost:8080/viewemp")
   }
   fetchSecurity=()=>{
    return this.http.get("http://localhost:8080/viewsecurity")
   }
   searchEmployee=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/searchemp",dataToSend)
   }
   searchSecurity=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/searchsecurity",dataToSend)
   }
   deleteSecurity=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/deletesecurity",dataToSend)
  }
  deleteEmployee=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/deleteemp",dataToSend)
  }
  updateEmployee=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/updateemp",dataToSend)
  }
  emplogin=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/employeeauth",dataToSend)
  }
  empProfileData=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/empprofile",dataToSend)
  }
  leaveApplication=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/leavapplication",dataToSend)
  }
  leaveStatus=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/empleavestatus",dataToSend)
  }
  leaveAdminView=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/adminleaveUpdate",dataToSend)
  }
  approveLeave=(dataToSend:any)=>{
    return this.http.post("http://localhost:8080/leaveupdateStatus",dataToSend)
  }
  empLog=()=>{
    return this.http.get("http://localhost:8080/employeelog")
  }
  visitorLog=()=>{
    return this.http.get("http://localhost:8080/visitorlog")
  }




}
