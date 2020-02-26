import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  constructor(private db: AngularFirestore) { }

  getUsers() {
    return this.db.collection('Users').valueChanges();
  }

  getMessages() {
    return this.db
      .collection('messages', ref => ref.orderBy('time'))
      .valueChanges();
  }

  sendMessages(value) {
    const timestamp = this.getTimeStamp();
    return this.db
      .collection('messages')
      .add({ content: value, time: timestamp });
  }

  getTimeStamp() {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' +
      (now.getUTCMonth() + 1) + '/' +
      now.getUTCDate();
    const time = now.getUTCHours() + ':' +
      now.getUTCMinutes() + ':' +
      now.getUTCSeconds();

    return (date + ' ' + time);
  }
}
