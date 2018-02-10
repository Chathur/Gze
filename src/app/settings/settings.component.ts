import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
  })
  export class SettingsComponent implements OnInit {
  
    constructor(private router: Router) { }
 
    ngOnInit() {
        
    }

    goToSuppliers()
    {
      this.router.navigate(['settings/supplier-list'])
    }
  
    goToCustomers()
    {
      this.router.navigate(['settings/customer-list'])
    }

    goToEmployees()
    {
      this.router.navigate(['settings/employee-list'])
    }

    goToRoutes()
    {
      this.router.navigate(['settings/route-list'])
    }
    
  }