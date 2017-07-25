import { Component, OnInit } from '@angular/core';
import { HallOfFameService } from '../services/hall-of-fame.service';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

import { Metaphor } from "../models/metaphor.model";
import { SessionInstance } from '../models/session-instance.model';
import { DatamuseService } from './../services/datamuse.service';
import { ConceptService } from "./../services/concept.service";
import { MadLibService } from "./../services/mad-lib.service";

@Component({
  selector: 'app-metaphors',
  templateUrl: './metaphors.component.html',
  styleUrls: ['./metaphors.component.css']
})

export class MetaphorsComponent implements OnInit {
  firstConcept: string;
  currentConcept: string;
  currentMetaphors: Metaphor[] = [];
  threshold: number = 1;
  progressTowardsThreshold: number = 0;

  constructor(private datamuseService: DatamuseService,
              private conceptService: ConceptService,
              private hofService: HallOfFameService,
              private sessionService: SessionService,
              private madLibService: MadLibService,
              private router: Router
              ) {}

  ngOnInit() {
    this.start();
  }

  start() {
    this.conceptService.getConcepts().subscribe((concepts) => {
      this.firstConcept = this.conceptService.activateConcept(concepts);
      if (this.firstConcept === 'false') {
        this.router.navigate(['/exhaustion']);
      }
      this.currentConcept = this.firstConcept;
      this.makeMetaphor();
      this.makeMetaphor();
    });
  }

  makeMetaphor() {
    // this.datamuseService.getAdjRelatedToNouns(this.currentConcept).subscribe(response => {
    this.datamuseService.getNouns(this.currentConcept).subscribe(response => {
      let nounOne: string = RiTa.singularize(response.json()[Math.floor(Math.random() * response.json().length)].word);
      let nounTwo: string = RiTa.singularize(response.json()[Math.floor(Math.random() * response.json().length)].word);
      while (nounOne === nounTwo) {
        nounTwo = response.json()[Math.floor(Math.random() * response.json().length)].word;
      }
      //returns an object with two keys, a string to be used as a template and a number of concepts necessary to fill the template:
      let templateObj = this.madLibService.buildMadLib();

      //governs rolling singular and plural forms of concepts and using correct particles with them.
      switch(Math.floor(Math.random() * 4)) {
        case 0:
          console.log('no plurals');
          nounOne = `a ${nounOne}`;
          nounTwo = `a ${nounTwo}`;
        break;
        case 1:
          console.log('first noun plural');
          nounOne = `${RiTa.pluralize(nounOne)}`;
          nounTwo = `a ${nounTwo}`;
        break;
        case 2:
          console.log('second noun plural');
          nounOne = `a ${nounOne}`;
          nounTwo = `${RiTa.pluralize(nounTwo)}`;
        break;
        case 3:
          console.log('both nouns plural');
          nounOne = `${RiTa.pluralize(nounOne)}`;
          nounTwo = `${RiTa.pluralize(nounTwo)}`;
        break;
        default:
        console.log('Whoops.')
      }
      let newMetaphor = new Metaphor(`
        ${this.firstConcept}
        ${templateObj.template
        .replace('CONCEPT2', nounOne)
        .replace('CONCEPT3', nounTwo)}`); //if no third concept, this fails quietly and without error.
      // let newMetaphor = new Metaphor(`${this.firstConcept} is more than ${nounOne} with ${nounTwo}`);
      newMetaphor.concepts.push(nounOne);
      newMetaphor.concepts.push(nounTwo);
      this.currentMetaphors.push(newMetaphor);
    });
  }

  preferMetaphor(metaphor: Metaphor) {
    var newSessionInstance = new SessionInstance(this.currentMetaphors[0], this.currentMetaphors[1], metaphor, this.firstConcept);
    if (this.sessionService.activeSession === null) {
      this.sessionService.createNewSession(newSessionInstance);
    } else {
      this.sessionService.addSessionInstanceToSession(newSessionInstance);
    }

    this.progressTowardsThreshold += 1; // check if the same metaphor was clicked before incrementing
    if (this.sessionService.activeSession.sessions.length > 1) {
      if (metaphor.metaphor !== this.sessionService.activeSession.sessions[this.sessionService.activeSession.sessions.length - 2].selectedMetaphor.metaphor) {
        this.progressTowardsThreshold = 0;
      }
    }

    if (this.progressTowardsThreshold === this.threshold) {
      this.progressTowardsThreshold = 0;
      this.sessionService.commitSession();
      this.conceptService.exhaustConcept(this.conceptService.activeConcept);
      this.currentMetaphors = [];

      this.start();
      return;
    }

    this.currentMetaphors = [];
    this.currentMetaphors.push(metaphor);
    this.currentConcept = metaphor.concepts[Math.floor(Math.random() * metaphor.concepts.length)];
    this.makeMetaphor();

  }
}
