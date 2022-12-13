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
}
