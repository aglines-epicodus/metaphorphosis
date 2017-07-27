import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Concept } from '../models/concept.model';
import { HallOfFameService } from './hall-of-fame.service';
import { SessionService } from './session.service';

@Injectable()
export class ConceptService {

  concepts: FirebaseListObservable<any[]>;
  activeConcept: any = null;
  exhaustedConcepts: any[] = [];

  constructor(private database: AngularFireDatabase, private hallOfFameService: HallOfFameService, private sessionService: SessionService) {
    this.concepts = database.list('concepts');
  }

  getConcepts() {
    return this.concepts;
  }

  addConcept(concept: Concept) {
    this.concepts.push(concept);
  }

  updateConcept(concept) {
    this.getConceptById(concept.$key).set(concept);
  }

  activateConcept(concepts, id) {

    if (concepts.length === this.exhaustedConcepts.length) {
      this.hallOfFameService.addHallOfFameSession(this.sessionService.fullSession, id);
      this.sessionService.fullSession = [];
      return 'false';
    }
    var candidateConcept = concepts[Math.floor(Math.random() * concepts.length)].concept;
    while(this.exhaustedConcepts.includes(candidateConcept)) {
      candidateConcept = concepts[Math.floor(Math.random() * concepts.length)].concept;
    }

    this.activeConcept = candidateConcept;

    return this.activeConcept;
  }

  exhaustConcept(concept) {
    this.exhaustedConcepts.push(concept);
  }

  getConceptById(key) {
    return this.database.object('concepts/' + key);
  }

  removeConcept(key) {
    this.getConceptById(key).remove();
  }
}
