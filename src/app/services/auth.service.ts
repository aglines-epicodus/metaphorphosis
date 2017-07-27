import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { User } from '../models/user.model';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;
  users: FirebaseListObservable<any[]>;
  isAdmin = false;

  constructor(public auth: AngularFireAuth, private db: AngularFireDatabase) {
    this.user = auth.authState;
    this.users = db.list('users');
  }

  login() {
    this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((data) => {
      var uid = data.user.uid;
      // this.users.push(new User(uid, data.user.displayName));
      this.users.subscribe(users => {
        if (users.length > 0) {
          users.forEach(user => {
            if (user.uid === uid) {
              if (user.isAdmin) {
                this.isAdmin = true;
              }
            }
          });
        }
      });
    });
  }

  logout() {
    this.auth.auth.signOut();
  }
}
