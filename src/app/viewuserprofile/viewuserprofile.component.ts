import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewuserprofile',
  templateUrl: './viewuserprofile.component.html',
  styleUrls: ['./viewuserprofile.component.css']
})
export class ViewuserprofileComponent {

  id:any=""
  userdata:any=[]
  constructor(private api : ApiService)
  {
    this.id  = localStorage.getItem("id")
    console.log(this.id)
    let data:any={"id":this.id}
    this.api.empProfileData(data).subscribe(

    (response:any)=>
    {
      console.log(response)
      this.userdata=response
    }

    )
  }

}


