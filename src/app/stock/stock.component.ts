import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-stock',
    templateUrl: './stock.component.html',
    styleUrls: ['./stock.component.css']
  })
  export class StockComponent implements OnInit {
  
    constructor(private router: Router) { }
 
    ngOnInit() {
        
    }

    goToItems()
    {
      this.router.navigate(['stock/item-list'])
    }
  
    goTocategories()
    {
      this.router.navigate(['stock/category-list'])
    }
  
  }