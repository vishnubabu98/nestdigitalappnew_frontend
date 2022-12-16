import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-emp-log-entry',
  templateUrl: './add-emp-log-entry.component.html',
  styleUrls: ['./add-emp-log-entry.component.css']
})
export class AddEmpLogEntryComponent {

  empcode=""
  entry_time=""
  exit_time=""
  date=""

  constructor(private api : ApiService)
  {

  }

  readValues=()=>
    {
          let data :any ={"empcode":this.empcode,"entry_time":this.entry_time,"exit_time":this.exit_time,
        "date":this.date}
        console.log(data)
       

        this.api.employeeLogEntry(data).subscribe(
         
          (response:any)=>
          {
             console.log(response)
             if(response.status == "success")
             {
              alert("Data Saved")
             }
             else{
              alert("Data not saved")
             }
          }


        )

    }

}


