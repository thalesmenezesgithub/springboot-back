import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];

  constructor(){
    this.employees = [];
  }

  ngOnInit(): void {
      this.employees = [{
        "id": 1,
        "firstName" : "João",
        "lastName" : "Antônio",
        "emailId" : "joaoantonio@gmail.com"
      }];
  }
}
