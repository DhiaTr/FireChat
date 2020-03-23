import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private Auth: AuthService,
              private route: Router) { }

  Login(LoginForm) {
    this.Auth.login(LoginForm.value.LoginMail, LoginForm.value.Password);
    this.route.navigate(['/chat']);
  }

}
