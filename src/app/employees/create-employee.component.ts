import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department.model';
import {Employee} from '../models/employee.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit { 
  employee: Employee = 
    {
      id: null,
      name:null,
      gender: null,
      contactPreference: null,
      phoneNumber: null,
      email: null,
      dateOfBirth : null,
      department : null,
      isActive : null,
      photoPath:null
  };
  departments: Department[] = [
    {id : 1, name:'Help Desk'},
    {id : 2, name:'HR'},
    {id : 3, name:'IT'},
    {id : 4, name:'Payroll'},
    {id : 5, name:'Admin'}
  ];
  constructor() { }

  ngOnInit() {
  }

  saveEmployee(newEmployee : Employee): void {
    console.log(newEmployee);
  }



}
