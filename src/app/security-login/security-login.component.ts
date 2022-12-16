import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-login',
  templateUrl: './security-login.component.html',
  styleUrls: ['./security-login.component.css']
})
export class SecurityLoginComponent {

  username=""
  password=""
  constructor(private api : ApiService, private route : Router)
  {

  }

  securityLogin=()=>{
    let data:any={
      "username":this.username,
      "password":this.password
    }
    console.log(data)
    this.api.securityAuth(data).subscribe(

    (response:any)=>
    {
      console.log(response)
      if(response.status == "success")
      {
        let id:any = response.sid
        console.log(id)
        localStorage.setItem("id",id)
        this.route.navigate(["/securityprofile"])
      }
      else
      {
        alert(response.failed)
      }
    }

    )
  }

}
