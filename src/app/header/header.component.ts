import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  routePath: any;
  displayList:any;
  documentId:any;
  constructor(public router: Router,) { this.routePath = router.url;}

  ngOnInit(): void {
    
    
  }
  ngDoCheck(){
    this.displayList = localStorage.getItem('displayList');
    this.documentId = localStorage.getItem('documentId');
  }

  reloadCurrentPage() {
    window.location.reload();
  }
    

}
