import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.css']
})
export class LeaveRequestComponent {

  applyingdate=""
  updated=""
  leaveData:any =[]
  

  constructor(private api : ApiService)
  {

  }

  search=()=>
  {
    let data:any={"applyingdate":this.applyingdate}
    console.log(data)
    this.api.leaveAdminView(data).subscribe(
     

      (response:any)=>
      {
        console.log(response)
        this.leaveData=response
      }


    )
  }
  approve=(id:any)=>
  {
     let data:any = {"id":id,"status":1,"updated":1}
     this.api.approveLeave(data).subscribe(
      

      (response:any)=>
      {
        console.log(response)
        if(response.status == "success")
        {
          alert("approved")
        }
        else
        {
          alert("some problem")
        }
      }


     )
  }
  rejected=(id:any)=>
  {
     let data:any = {"id":id,"status":-1,"updated":1}
     this.api.approveLeave(data).subscribe(
      

      (response:any)=>
      {
        console.log(response)
        if(response.status == "success")
        {
          alert("Rejected")
        }
        else
        {
          alert("some problem")
        }
      }


     )
  }

 

 

}


