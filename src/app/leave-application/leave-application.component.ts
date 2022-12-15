import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leave-application',
  templateUrl: './leave-application.component.html',
  styleUrls: ['./leave-application.component.css']
})
export class LeaveApplicationComponent {

  leavetype=""
  startdate=""
  enddate=""
  reason=""
  
  empid:any=""


  constructor(private api : ApiService)
  {
    this.empid =  localStorage.getItem("id")
  }

  readValues=()=>
  {
    let data:any = {"empid":this.empid,"leaveType":this.leavetype,"start_date":this.startdate,"end_date":this.enddate,"reason":this.reason,"status":0,"updated":0}
    console.log(data)
    this.api.leaveApplication(data).subscribe(
      
      (response:any)=>
      {
        console.log(response)
        if(response.status=="success")
        {
          alert("applied")
        }
        else{
          alert("not applied")
        }
      }


    )
    
  }

    
  }



