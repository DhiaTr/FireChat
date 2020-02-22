import { Component, OnInit } from '@angular/core';
import { MessagingService } from 'src/services/messaging.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  Users: any[];

  constructor(
    private MService: MessagingService
  ) { }

  ngOnInit() {
    // this code might be executed later when server respond (it's observable or promise)
    this.MService.getUsers()
    .subscribe(User => {
       this.Users = User;
      });
  }

}
