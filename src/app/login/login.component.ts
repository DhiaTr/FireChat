import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private Auth: AuthService) { }

  Login(LoginForm) {
    this.Auth.getUser()
      .subscribe(val => {
        console.log(val);
      });
    this.Auth.login(LoginForm.value.LoginMail, LoginForm.value.Password);
  }

}
