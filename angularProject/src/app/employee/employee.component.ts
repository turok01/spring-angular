import { Component, OnInit } from '@angular/core';
import {HttpClientService} from "../service/http-client.service";
import {Employee} from "./employee";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [HttpClientService]

})
export class EmployeeComponent implements OnInit {
  //employees: Employee[];
  employees: any;
  constructor(private httpClientService:HttpClientService) { }

  ngOnInit(): void {
    this.httpClientService.getData().subscribe(
      //data => this.employees = data);
      data => this.employees = data["employeeList"]);
  }

}
