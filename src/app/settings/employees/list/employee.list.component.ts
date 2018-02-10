import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee.list.component.html',
    styleUrls: ['./employee.list.component.css']
  })
  export class EmployeeListComponent implements OnInit {
  
    constructor(private router: Router) { }
 
    ngOnInit() {
        
    }

    goToEdit(){
      this.router.navigate(['settings/employee-edit'])
    }
  
  }