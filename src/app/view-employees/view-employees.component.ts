import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent {
  data:any=[]
  constructor(private api:ApiService){

    this.api.fetchEmployee().subscribe(
      (response:any)=>{
        this.data=response
      }
    )
    
  }

}
