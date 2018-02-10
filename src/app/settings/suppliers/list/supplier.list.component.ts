import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-supplier-list',
    templateUrl: './supplier.list.component.html',
    styleUrls: ['./supplier.list.component.css']
  })
  export class SupplierListComponent implements OnInit {
  
    constructor(private router: Router) { }
 
    ngOnInit() {
        
    }

    goToEdit(){
      this.router.navigate(['settings/supplier-edit'])
    }
  
  }