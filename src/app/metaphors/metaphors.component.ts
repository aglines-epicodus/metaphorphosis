import { Component, OnInit } from '@angular/core';
import { DatamuseService } from '../services/datamuse.service';
import { ConceptService } from '../services/concept.service';
import { HallOfFameService } from '../services/hall-of-fame.service';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

import { Metaphor } from "../models/metaphor.model";
import { SessionInstance } from '../models/session-instance.model';

@Component({
  selector: 'app-metaphors',
  templateUrl: './metaphors.component.html',
  styleUrls: ['./metaphors.component.css']
})
export class MetaphorsComponent implements OnInit {
  firstConcept: string;
  currentConcept: string;
  currentMetaphors: Metaphor[] = [];
  threshold: number = 5;
  progressTowardsThreshold: number = 0;

  constructor(private datamuseService: DatamuseService,
              private conceptService: ConceptService,
              private hofService: HallOfFameService,
              private sessionService: SessionService,
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
      let nounOne: string = response.json()[Math.floor(Math.random() * response.json().length)].word;
      let nounTwo: string = response.json()[Math.floor(Math.random() * response.json().length)].word;
      let loopCounter: number = 0;
      while (nounOne === nounTwo && loopCounter < 50) {
        nounTwo = response.json()[Math.floor(Math.random() * response.json().length)].word;
        loopCounter ++;
        if (loopCounter === 50) {
          console.log('Oh no. While ran forever.');
        }
      }
      // let newMetaphor = new Metaphor(`${this.firstConcept} is more ${nounOne} than ${nounTwo}`);
      let newMetaphor = new Metaphor(`${this.firstConcept} is more than ${nounOne} with ${nounTwo}`);
      newMetaphor.concepts.push(nounOne);
      newMetaphor.concepts.push(nounTwo);
      this.currentMetaphors.push(newMetaphor);
      // console.log(this.currentMetaphors);
    });
  }

  preferMetaphor(metaphor: Metaphor) {
    var newSessionInstance = new SessionInstance(this.currentMetaphors[0], this.currentMetaphors[1], metaphor);
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