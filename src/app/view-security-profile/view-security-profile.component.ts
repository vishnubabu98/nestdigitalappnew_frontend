import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-security-profile',
  templateUrl: './view-security-profile.component.html',
  styleUrls: ['./view-security-profile.component.css']
})
export class ViewSecurityProfileComponent {

  id:any=""
  userdata:any=[]
  constructor(private api : ApiService)
  {
    this.id  = localStorage.getItem("id")
    console.log(this.id)
    let data:any={"id":this.id}
    this.api.securityProfile(data).subscribe(

    (response:any)=>
    {
      console.log(response)
      this.userdata=response
    }

    )
  }

}
