import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user;
  constructor(private Auth: AuthService) {
    Auth.getUser().subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit() {
  }

}
