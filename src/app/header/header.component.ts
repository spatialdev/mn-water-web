import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  appRouter: Router;

  constructor(private router: Router) { 
    this.appRouter = router;
  }

  ngOnInit() {
  }

  handleHeaderTap() {
    this.appRouter.navigateByUrl("");
  }

  handleBackTap() {
    this.appRouter.navigateByUrl("/images");
  }

}
