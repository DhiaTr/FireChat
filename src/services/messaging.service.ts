import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MessagingService{

  constructor(
    private db: AngularFirestore
  ) { }

  getUsers() {
      return this.db.collection('Users').valueChanges();
  }

  getMessages() {
    return this.db.collection('messages').valueChanges();
  }

  sendMessages(value) {

    this.db.collection('messages').valueChanges()
    .subscribe(val => {
      console.log(val);
    });
    // console.log(counter);
    return this.db.collection('messages').add({'content': value});
  }

}
