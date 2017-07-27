import { Component, OnInit } from '@angular/core';
import { HallOfFameService } from '../services/hall-of-fame.service';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
import * as Articles from 'articles';

import { Metaphor } from "../models/metaphor.model";
import { SessionInstance } from '../models/session-instance.model';
import { DatamuseService } from './../services/datamuse.service';
import { ConceptService } from "./../services/concept.service";
import { MadLibService } from "./../services/mad-lib.service";

@Component({
  selector: 'app-metaphors',
  templateUrl: './metaphors.component.html',
  styleUrls: ['./metaphors.component.scss']
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
              private madLibService: MadLibService,
              private router: Router
              ) {}

  ngOnInit() {
    this.start(0);
  }

  start(id) {
    this.conceptService.getConcepts().subscribe((concepts) => {
      this.firstConcept = this.conceptService.activateConcept(concepts, id);
      //check to see if we're done with the list of concepts and if we are, dump out to exhaustion page
      if (this.firstConcept === 'false') {
        this.conceptService.exhaustedConcepts = [];
        this.router.navigate(['/exhaustion']);
      }
      this.currentConcept = this.firstConcept;
      this.makeMetaphor();
      this.makeMetaphor();
    });
  }

  makeMetaphor() {
    // this.datamuseService.getDatamuseResponse(this.currentConcept);

    console.log(this.currentConcept);
    this.datamuseService.getNouns(this.currentConcept).subscribe(response => {
      console.log(response.json());
      let nounOne: string = RiTa.singularize(response.json()[Math.floor(Math.random() * response.json().length)].word);
      let nounTwo: string = RiTa.singularize(response.json()[Math.floor(Math.random() * response.json().length)].word);
      let loopCounter = 0;
      while (nounOne === nounTwo && loopCounter < 100) {
        nounTwo = response.json()[Math.floor(Math.random() * response.json().length)].word;
        loopCounter ++;
      }
      //returns an object with two keys, a string to be used as a template and a number of concepts necessary to fill the template:
      let templateObj = this.madLibService.buildMadLib();

      //Assign adjectives to nounOne some of the time. NOTE: adjectives are based on currentConcept, not nounOne
      if (Math.random() > .5) {
        this.datamuseService.getAdjFor(this.currentConcept).subscribe(response => {
          console.log(this.currentConcept);
          nounOne = `${response.json()[Math.floor(Math.random() * response.json().length)].word} ${nounOne}`

          //governs rolling singular and plural forms of concepts and using correct particles with them.
          switch(Math.floor(Math.random() * 4)) {
            case 0:
              nounOne = `${Articles.articlize(nounOne)}`;
              nounTwo = `${Articles.articlize(nounTwo)}`;
            break;
            case 1:
              nounOne = `${RiTa.pluralize(nounOne)}`;
              nounTwo = `${Articles.articlize(nounTwo)}`;
            break;
            case 2:
              nounOne = `${Articles.articlize(nounOne)}`;
              nounTwo = `${RiTa.pluralize(nounTwo)}`;
            break;
            case 3:
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
          newMetaphor.concepts.push(nounOne);
          newMetaphor.concepts.push(nounTwo);
          this.currentMetaphors.push(newMetaphor);
        });
      } else {
        //governs rolling singular and plural forms of concepts and using correct particles with them.
        switch(Math.floor(Math.random() * 4)) {
          case 0:
            nounOne = `${Articles.articlize(nounOne)}`;
            nounTwo = `${Articles.articlize(nounTwo)}`;
          break;
          case 1:
            nounOne = `${RiTa.pluralize(nounOne)}`;
            nounTwo = `${Articles.articlize(nounTwo)}`;
          break;
          case 2:
            nounOne = `${Articles.articlize(nounOne)}`;
            nounTwo = `${RiTa.pluralize(nounTwo)}`;
          break;
          case 3:
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
        newMetaphor.concepts.push(nounOne);
        newMetaphor.concepts.push(nounTwo);
        this.currentMetaphors.push(newMetaphor);
      }
    });
  }

  preferMetaphor(metaphor: Metaphor) {
    //to be used as reference id in database
    var id = Date.now();

    //create new session instance
    var newSessionInstance = new SessionInstance(this.currentMetaphors[0], this.currentMetaphors[1], metaphor, this.firstConcept, id);

    //check to see if there is an active session
    if (this.sessionService.activeSession === null) {
      //if there isn't one, create one in the session service
      this.sessionService.createNewSession(newSessionInstance);
    } else {
      //if there is one push it into full session array
      this.sessionService.addSessionInstanceToSession(newSessionInstance);
    }

    //increment the progress toward the threshold
    this.progressTowardsThreshold += 1;
    //as long as the activeSession has more than 1 item in it
    if (this.sessionService.activeSession.sessions.length > 1) {
      //check to see if the two things are the same preferred metaphor
      if (metaphor.metaphor !== this.sessionService.activeSession.sessions[this.sessionService.activeSession.sessions.length - 2].selectedMetaphor.metaphor) {
        //if they are reset the progress towards threshold
        this.progressTowardsThreshold = 0;
      }
    }

    //if the threshold has been reached
    if (this.progressTowardsThreshold === this.threshold) {
      //reset the progress in prep for the next concept
      this.progressTowardsThreshold = 0;
      //send an action to the session service to commit the session to the database and prep for the next round
      this.sessionService.commitSession(id);
      //update the concept service to know that it has been exhausted in this session and be ready to present the next one
      this.conceptService.exhaustConcept(this.conceptService.activeConcept);
      //reset the state of the current metaphors to start over
      this.currentMetaphors = [];

      //start over with a new concept
      this.start(id);
      return;
    }

    this.currentMetaphors = [];
    this.currentMetaphors.push(metaphor);
    let currentConceptTokens = RiTa.tokenize(metaphor.concepts[Math.floor(Math.random() * metaphor.concepts.length)]);
    this.currentConcept = RiTa.singularize(currentConceptTokens[currentConceptTokens.length - 1]);
    this.makeMetaphor();

  }
}
