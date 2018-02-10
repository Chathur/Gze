import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sales',
    templateUrl: './sales.component.html',
    styleUrls: ['./sales.component.css']
  })
  export class SalesComponent implements OnInit {
  
    constructor( private router: Router) { }
 
    ngOnInit() {
        
    }

    goTosalesOrders()
    {
      this.router.navigate(['sales/sales-order'])
    }
  
    goToSales()
    {
      this.router.navigate(['sales/sales-main'])
    }

    goToDirectSales()
    {
      this.router.navigate(['sales/sales-direct'])
    }

    goToSalesReturns()
    {
      this.router.navigate(['sales/sales-return'])
    }
  
  }