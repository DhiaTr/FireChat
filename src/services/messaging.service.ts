import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  user;
  username;
  constructor(
    private db: AngularFirestore,
    private Auth: AuthService
  ) {
    // take data from constuctor so it works
    this.Auth.getUser()
      .subscribe(val => {
        this.user = val.uid;


        db.collection('Users').doc(val.uid).valueChanges()
          .subscribe(val2 => {
            this.username = val2;
          });
      });

  }




  getUsers() {
    return this.db.collection('Users').valueChanges();
  }

  getMessages() {
    return this.db
      .collection('messages', ref => ref.orderBy('order').limitToLast(25))
      .valueChanges();
  }

  sendMessages(value) {
    const timestamp = this.getTimeStamp();
    return this.db
      .collection('messages')
      .add({ order: new Date(), content: value, time: timestamp, user: this.username.displayName });

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
