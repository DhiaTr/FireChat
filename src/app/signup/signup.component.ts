import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private Auth: AuthService) { }

  createUser(form) {
    this.Auth.createUser(form.value);
  }

}
