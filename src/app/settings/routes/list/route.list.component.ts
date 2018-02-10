import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-route-list',
    templateUrl: './route.list.component.html',
    styleUrls: ['./route.list.component.css']
  })
  export class RouteListComponent implements OnInit {
  
    constructor(private router: Router) { }
 
    ngOnInit() {
        
    }

    goToEdit(){
      this.router.navigate(['settings/route-edit'])
    }
  
  }