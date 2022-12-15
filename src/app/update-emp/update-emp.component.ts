import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent {

  empcode=""
  empname=""
  address=""
  email=""
  mobno=""
  username=""

  empdetails:any=[]
  constructor(private api : ApiService) {}
  search=()=>
  {
    let data:any={"empcode":this.empcode}
    console.log(data)
    this.api.searchEmployee(data).subscribe(

     (response:any)=>
     {
       this.empdetails=response
       
     }



    )

  }
  UpdateValues=(id:any)=>
  {
    let data:any = {"id":id,"empname":this.empname,"address":this.address,"email":this.email,"mobno":this.mobno,"username":this.username}
    console.log(data)
    this.api.updateEmployee(data).subscribe(

     (response:any)=>
     {
      if(response.status=="success")
      {
        alert("update successfully")
        window.location.reload()
      }
      else{
        alert("not updated")
      }
     }

    )
  }

}


