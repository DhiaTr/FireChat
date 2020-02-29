import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';
import { AuthService } from 'src/services/auth.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  user: firebase.User;
  constructor(private Auth: AuthService) { }

  ngOnInit() {
    this.Auth.getUser()
      .subscribe(user => {
        this.user = user;
      });
  }

  logout() {
    this.Auth.logout();
  }

}
