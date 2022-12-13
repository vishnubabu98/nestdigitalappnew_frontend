import { Component } from '@angular/core';

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
      }
}



