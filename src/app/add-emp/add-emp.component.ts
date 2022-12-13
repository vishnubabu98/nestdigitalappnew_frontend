import { Component } from '@angular/core';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent {

  empcode=""
  empname=""
  address=""
  email=""
  mobno=""
  username=""
  password=""

  readValues=()=>{
    let data:any={
      "empcode":this.empcode,
      "empname":this.empname,
      "address":this.address,
      "email":this.email,
      "mobno":this.mobno,
      "username":this.username,
      "password":this.password
    }
    console.log(data)
  }

}
