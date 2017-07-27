import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  user: Observable<firebase.User>;

  constructor(public auth: AngularFireAuth) {
    this.user = auth.authState;
  }

  login() {
    this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.auth.auth.signOut();
  }

}
