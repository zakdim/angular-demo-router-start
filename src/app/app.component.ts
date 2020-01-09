import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Component, OnInit, VERSION } from '@angular/core';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Store';
  version = VERSION.full;

  constructor(
    private loginService: AuthService,
    private router: Router) {

    }

  get isLoggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }

  login() {
    this.router.navigateByUrl("/login");
  }

  logout() {
    this.loginService.logout();
    this.router.navigateByUrl("/home");
  }

  ngOnInit() {
  }
}
