import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leave-status',
  templateUrl: './leave-status.component.html',
  styleUrls: ['./leave-status.component.css']
})
export class LeaveStatusComponent {

  empid:any =""
  leaveData:any =[]
  color:any =""
 

  constructor(private api : ApiService)
  {
    this.empid = localStorage.getItem("id")
    let data :any ={"empid":this.empid}
      this.api.leaveStatus(data).subscribe(

      (response:any)=>
      {
        console.log(response)
        this.leaveData=response  
      }

      )
  }


}
