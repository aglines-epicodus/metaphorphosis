import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Session } from '../models/session.model';
import { SessionInstance } from '../models/session-instance.model';


@Injectable()
export class SessionService {

  sessions: FirebaseListObservable<any[]>;
  activeSession: Session;

  constructor(private database: AngularFireDatabase) {
    this.sessions = database.list('sessions');
  }

  getSessions() {
    return this.sessions;
  }

  getSessionById(id) {
    return this.database.object('sessions/' + id);
  }

  createNewSession(instance: SessionInstance) {
    if (this.activeSession !== null) {
      this.activeSession = new Session([instance]);
    }
  }

  addSessionInstanceToSession(instance) {
    if (this.activeSession !== null) {
      this.activeSession.sessions.push(instance);
    }
  }

  commitSession() {
    this.sessions.push(this.activeSession);
    this.activeSession = null;
  }
}
