import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { MessagingService } from 'src/services/messaging.service';

@Component({
  selector: 'chat-interface',
  templateUrl: './chat-interface.component.html',
  styleUrls: ['./chat-interface.component.css']
})
export class ChatInterfaceComponent implements OnInit, AfterViewChecked {
  @ViewChild('scroller', { static: false }) private feedContainer: ElementRef;

  messages;
  value;

  constructor(
    private MService: MessagingService
  ) { }

  ngOnInit() {

    this.MService.getMessages()
      .subscribe(message => {
        this.messages = message;
      });


  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  send(field) {
    if (field.value != '') {
      this.MService.sendMessages(field.value);
      this.value = '';
    }
  }

  scrollToBottom() {
    this.feedContainer.nativeElement.scrollTop =
      this.feedContainer.nativeElement.scrollHeight;
  }

  handleSubmit(event) {
    this.send(event);
  }
}
