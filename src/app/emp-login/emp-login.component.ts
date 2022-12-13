import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.css']
})
export class EmpLoginComponent {

  email=""
  password=""

  empLogin=()=>{
    let data:any={
      "email":this.email,
      "password":this.password
    }
    console.log(data)
  }
}
