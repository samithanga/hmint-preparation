import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[] = [
    {
      id: 1,
      name:'Mark',
      gender: 'Male',
      contactPreference: 'Email',
      phoneNumber: 9445500796,
      email: 'mark@info.com',
      dateOfBirth : new Date('10/25/1988'),
      department : "IT",
      isActive : true,
      photoPath:'assets/images/user-1.jpg'
    },
    {
      id: 2,
      name:'Kasim',
      gender: 'Male',
      contactPreference: 'Email',
      phoneNumber: 9003040714,
      email: 'kasim@info.com',
      dateOfBirth : new Date('04/21/1992'),
      department : "IT",
      isActive : true,
      photoPath:'assets/images/user-2.jpg'
    },
    {
      id: 1,
      name:'ramkumar',
      gender: 'Male',
      contactPreference: 'Email',
      phoneNumber: 9550124879,
      email: 'ram@info.com',
      dateOfBirth : new Date('10/03/1993'),
      department : "IT",
      isActive : true,
      photoPath:'assets/images/user-4.jpg'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
