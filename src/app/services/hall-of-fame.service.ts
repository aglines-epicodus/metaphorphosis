import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { DisplayListService } from './display-list.service';
import { Session } from '../models/session.model';
import { Router } from '@angular/router';

@Injectable()
export class HallOfFameService {

  hallOfFameList: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase, private displayListService: DisplayListService, private router: Router) {
    this.hallOfFameList = database.list('halloffame');
  }

  getHallOfFameList() {
    return this.hallOfFameList;
  }

  addHallOfFameSession(session: any, id: number) {
    this.displayListService.addNewList(session, id); // WE NEED TO PASS A KEY IN SOMEWHERE PLEASE THANKS YOU'RE THE BEST BRIAN AND JARED, GODSPEED WHEN YOU TRY AND TACKLE THIS MAMOJAMA
    var newObj = {
      data: session,
      refId: id
    }
    this.hallOfFameList.push(newObj);
  }

  getHallOfFameSessionById(id) {
    return this.database.object('halloffame/' + id);
  }

  saveUpdate(item) {
    this.getHallOfFameSessionById(item.$key).set(item);
  }

  findDetail(refId) {
    this.hallOfFameList.subscribe((list) => {
      list.forEach((item) => {
        if (item.refId === refId) {
          this.router.navigate(['/viewdetail/' + item.$key]);
        }
      });
    });
  }
}
