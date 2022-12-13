import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-security',
  templateUrl: './add-security.component.html',
  styleUrls: ['./add-security.component.css']
})
export class AddSecurityComponent {

  securitycode=""
  sname=""
  address=""
  mobileno=""
  username=""
  password=""
  constructor(private api:ApiService){
    
  }

    readValues=()=>{
      let data:any={
        "securitycode":this.securitycode,
        "sname":this.sname,
        "address":this.address,
        "mobileno":this.mobileno,
        "username":this.username,
        "password":this.password

      }
      console.log(data)
      this.api.addSecurity(data).subscribe(
        (response:any)=>{
          console.log(response)
        
        }
      )
      }
}



