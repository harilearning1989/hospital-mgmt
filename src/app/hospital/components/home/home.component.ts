import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LoginService} from "../../services/login/login.service";
import {SharedService} from "../../services/shared/shared.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public data: any;
  userName: any;
  user_role: any;
  subscription: any;
  str1: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private sharedService: SharedService
  ) {
  }

  ngOnInit() {
    const user = this.loginService.userValue;
    this.user_role = user && user.roles && user.roles[0];
    console.log('this.user_role::' + this.user_role);
    this.route
      .data
      .subscribe(v => console.log(v));
    this.data = this.route.snapshot.data;

    const isLoggedIn = user && user.accessToken;
    if (isLoggedIn) {
      this.userName = user.username;
    }
    debugger
    this.subscription = this.sharedService.getNavChangeEmitter()
      .subscribe(item => this.selectedNavItem(item));
  }

  selectedNavItem(str: string) {
    debugger
    this.str1 = str;
    console.log(this.str1);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
