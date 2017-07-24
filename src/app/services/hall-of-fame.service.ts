import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Session } from '../models/session.model';

@Injectable()
export class HallOfFameService {

  hallOfFameList: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.hallOfFameList = database.list('halloffame');
  }

  getHallOfFameList() {
    return this.hallOfFameList;
  }

  addHallOfFameSession(session: any) {
    this.hallOfFameList.push(session);
  }

  getHallOfFameSessionById(id) {
    return this.database.object('halloffame/' + id);
  }

  saveUpdate(item) {
    this.getHallOfFameSessionById(item.$key).set(item);
  }
}
