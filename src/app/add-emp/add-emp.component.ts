import { Component } from '@angular/core';
import { ApiService } from '../api.service';

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
  constructor(private api:ApiService){
    
  }

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
    this.api.addEmployee(data).subscribe(
      (response:any)=>{
        console.log(response)
      
      }
    )
  }

}
