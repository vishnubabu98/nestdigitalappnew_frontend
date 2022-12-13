import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-emp',
  templateUrl: './search-emp.component.html',
  styleUrls: ['./search-emp.component.css']
})
export class SearchEmpComponent {
  constructor(private api:ApiService){}
  empcode=""
  sData:any=[]
  readValues=()=>
  {
    let data:any=
    {
      "empcode":this.empcode
    }
    console.log(data)
    this.api.searchEmployee(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length==0)
        {
          alert("invalid employee code")
          
        } else 
        {
          this.sData=response
          
        }
      }
    )
  }
  dleteBtnClick=(id:any)=>{
    let data:any={"id":id}
    this.api.deleteEmployee(data).subscribe(
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
