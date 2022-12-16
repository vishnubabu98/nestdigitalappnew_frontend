import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-log',
  templateUrl: './security-log.component.html',
  styleUrls: ['./security-log.component.css']
})
export class SecurityLogComponent {

  visitorLogData:any =[]

  constructor(private api : ApiService)
  {
    this.api.visitorLog().subscribe(

     (response:any)=>
     {
         this.visitorLogData=response
     }


    )
  }

}
