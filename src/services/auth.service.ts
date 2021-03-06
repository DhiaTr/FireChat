import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  newUser: any;

  constructor(
    private AFAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router
  ) { }


  getUser() {
    return this.AFAuth.authState;
  }

  getUsersDB() {
    return this.getUser()
      .pipe(switchMap(val => {
        return this.db.collection('Users').doc(val.uid).valueChanges();
      }));
    // switchmap switches the observable after changing it qm
  }



  createUser(user) {
    this.AFAuth.auth.createUserWithEmailAndPassword(user.Email, user.Password)
      .then(userCredential => {
        this.newUser = user;
        this.insertUserData(userCredential)
          .then(() => {
            this.router.navigate(['/login']);
          });
      });
  }

  insertUserData(userCredential: firebase.auth.UserCredential) {
    return this.db.doc('Users/' + userCredential.user.uid).set({
      email: this.newUser.Email,
      displayName: this.newUser.Display
    });
  }

  login(email: string, password: string) {
    this.AFAuth.auth.signInWithEmailAndPassword(email, password)
      .then(Credentials => {
        this.router.navigate(['/chat']);
      });
  }

  logout() {
    this.AFAuth.auth.signOut();
  }

}
