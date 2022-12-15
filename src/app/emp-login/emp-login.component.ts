import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.css']
})
export class EmpLoginComponent {

  email=""
  password=""
  constructor(private api : ApiService, private route : Router)
  {

  }

  empLogin=()=>
  {
    let data:any ={"email":this.email,"password":this.password}
    console.log(data)
    this.api.emplogin(data).subscribe(

    (response:any)=>
    {
      console.log(response)
      if(response.status == "success")
      {
        let id:any = response.empid
        console.log(id)
        localStorage.setItem("id",id)
        this.route.navigate(["/empprofile"])
      }
      else
      {
        alert(response.failed)
      }
    }

    )
  }

}
