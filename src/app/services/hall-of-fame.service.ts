import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { DisplayListService } from './display-list.service';
import { Session } from '../models/session.model';

@Injectable()
export class HallOfFameService {

  hallOfFameList: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase, private displayListService: DisplayListService) {
    this.hallOfFameList = database.list('halloffame');
  }

  getHallOfFameList() {
    return this.hallOfFameList;
  }

  addHallOfFameSession(session: any) {
    this.displayListService.addNewList(session); // WE NEED TO PASS A KEY IN SOMEWHERE PLEASE THANKS YOU'RE THE BEST BRIAN AND JARED, GODSPEED WHEN YOU TRY AND TACKLE THIS MAMOJAMA
    this.hallOfFameList.push(session);
  }

  getHallOfFameSessionById(id) {
    return this.database.object('halloffame/' + id);
  }

  saveUpdate(item) {
    this.getHallOfFameSessionById(item.$key).set(item);
  }
}

//
// {
//   winningMetaphor0: Metaphor,
//   winningMetaphor1: metaphor,
//   fullSession: []
// }
//
// for (var key in object) {
//   if (key !== fullSession) {
//
//   }
// }
