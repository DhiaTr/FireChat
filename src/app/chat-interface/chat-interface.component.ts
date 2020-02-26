import { Component, OnInit } from '@angular/core';
import { MessagingService } from 'src/services/messaging.service';

@Component({
  selector: 'chat-interface',
  templateUrl: './chat-interface.component.html',
  styleUrls: ['./chat-interface.component.css']
})
export class ChatInterfaceComponent implements OnInit {

  messages;

  constructor(
    private MService: MessagingService
  ) { }

  ngOnInit() {

    this.MService.getMessages()
      .subscribe(message => {
        this.messages = message;
      });
  }

  send(field) {
    this.MService.sendMessages(field.value);

  }


  handleSubmit(event) {
    this.send(event);
  }
}
