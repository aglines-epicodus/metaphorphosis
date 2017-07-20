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

  activateConcept() {
    this.getConcepts().subscribe((concepts) => {
      var done = false;
      this.exhaustConcept(concepts[0]); // for testing only

      concepts.forEach((concept) => {
        this.exhaustedConcepts.forEach((exhaustedConcept) => {
          if (!done) {
            if (concept.concept !== exhaustedConcept.concept) {
              this.activeConcept = concept.concept;
              done = true;
            }
          }
        })
      });
      return this.activeConcept;
    });
  }

  exhaustConcept(concept) {
    this.exhaustedConcepts.push(concept);
  }
}
