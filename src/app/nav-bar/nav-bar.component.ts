import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { MessagingService } from 'src/services/messaging.service';
import { user } from '../models/user';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  userName;
  user: firebase.User;
  constructor(
    private Auth: AuthService,
    private route: Router,
    private msgService: MessagingService
  ) {
    Auth.getUsersDB()
      .subscribe((val: user) => {
        this.userName = val.displayName;
      });
  }

  ngOnInit() {
    this.Auth.getUser()
      .subscribe(user => {
        this.user = user;
      });
  }

  logout() {
    this.Auth.logout();
    this.route.navigate(['/home']);
  }

  getUserName() {
    console.log(this.userName);
  }

}
