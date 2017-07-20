import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Concept } from '../models/concept.model';

@Injectable()
export class ConceptService {

  concepts: FirebaseListObservable<any[]>;
  activeConcept: any = null;
  exhaustedConcepts: any[] = [];

  constructor(private database: AngularFireDatabase) {
    this.concepts = database.list('concepts');
  }

  getConcepts() {
    return this.concepts;
  }

  addConcept(concept: Concept) {
    this.concepts.push(concept);
  }

  activateConcept(concepts) {

    console.log(concepts);
    console.log(this.exhaustedConcepts);
    if (concepts.length === this.exhaustedConcepts.length) {
      return 'false';
    }
    var candidateConcept = concepts[Math.floor(Math.random() * concepts.length)].concept;
    while(this.exhaustedConcepts.includes(candidateConcept)) {
      candidateConcept = concepts[Math.floor(Math.random() * concepts.length)].concept;
    }

    this.activeConcept = candidateConcept;

    return this.activeConcept;

    // if (concepts.length === this.exhaustedConcepts.length) {
    //   return 'false';
    // }
    //
    // var done = false;
    //
    // concepts.forEach((concept) => {
    //   if (!this.exhaustedConcepts.includes(concept.concept) && !done) {
    //     this.activeConcept = concept.concept;
    //     var done = true;
    //   }
    // });
    //
    // return this.activeConcept;
  }

  exhaustConcept(concept) {
    this.exhaustedConcepts.push(concept);
  }
}
