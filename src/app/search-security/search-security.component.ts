import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-security',
  templateUrl: './search-security.component.html',
  styleUrls: ['./search-security.component.css']
})
export class SearchSecurityComponent {

  securitycode=""
  constructor(private api:ApiService){}
  searchData:any=[]
  readValue=()=>
  {
    let data:any=
    {
      "securitycode":this.securitycode
    }
    console.log(data)
    this.api.searchSecurity(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length ==0) {
          alert("no item")
          
        } else {
          this.searchData=response
          
        }
      }
    )
  }
  deletebuttonclick=(id:any)=>{
    let data:any={
      "id":id
    }
    this.api.deleteSecurity(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("deleted successfully")
          window.location.reload()
        } else {
         alert ("not deleted")
        }
      }
    )
  }

}
