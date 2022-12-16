import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-emp-log-entry',
  templateUrl: './emp-log-entry.component.html',
  styleUrls: ['./emp-log-entry.component.css']
})
export class EmpLogEntryComponent {

  employeeLog:any =[]

  constructor(private api : ApiService)
  {
    this.api.empLog().subscribe(

      (response:any)=>
      {
        this.employeeLog = response
      }



    )
  }


}

 


       


