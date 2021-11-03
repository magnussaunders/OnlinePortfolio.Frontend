import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentRoute = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(result => {
      if (result instanceof NavigationEnd) {
        this.currentRoute = result.urlAfterRedirects
      }
    }, error => {
      //TODO: Add error catching. 
    })
  }
}
