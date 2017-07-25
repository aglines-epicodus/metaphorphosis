import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Session } from '../models/session.model';
import { SessionInstance } from '../models/session-instance.model';

@Injectable()
export class DisplayListService {
  list: FirebaseListObservable<any[]>;


  constructor(private db: AngularFireDatabase) {
    this.list = db.list('display-list');
  }

  getLists() {
    return this.list;
  }

  getListById(id) {
    return this.db.object('display-list/' + id);
  }

  addNewList(sessions) {
    var metaphor:string;
    for (var i = 0; i < sessions.length; i++) {
      metaphor = sessions[i].sessions[sessions[i].sessions.length - 1].selectedMetaphor.metaphor;
      var newObject = {
        metaphor: metaphor,
        counter: 0
      };
      this.list.push(newObject);
    }
    // this.list.push(item);
  }

}
