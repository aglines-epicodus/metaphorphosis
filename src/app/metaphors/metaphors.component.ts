import { Component, OnInit } from '@angular/core';
import { DatamuseService } from './../services/datamuse.service';
import { ConceptService } from "./../services/concept.service";
// import { RiTa, RiGrammar } from 'rita';
// const RiTa = require('rita');


import { Metaphor } from './../metaphor.model';

@Component({
  selector: 'app-metaphors',
  templateUrl: './metaphors.component.html',
  styleUrls: ['./metaphors.component.css']
})
export class MetaphorsComponent implements OnInit {
  primaryConcept: string = 'politics';
  currentConcept: string;
  currentMetaphors: Metaphor[] = [];
  // riTa: any;

  constructor(private datamuseService: DatamuseService,
              private conceptService: ConceptService
              // private rita: RiTa
              // private riGrammar: RiGrammar = new RiGrammar()
              ) {
                // this.conceptService.activateConcept().subscribe(() => {
                //   this.primaryConcept = this.conceptService.activeConcept;
                // });

              }

  ngOnInit() {
    this.currentConcept = this.primaryConcept;
    this.makeMetaphor();
    this.makeMetaphor();
    console.log(RiTa.VERSION);
  }

  makeMetaphor() {
    // this.datamuseService.getAdjRelatedToNouns(this.currentConcept).subscribe(response => {
    this.datamuseService.getNouns(this.currentConcept).subscribe(response => {
      let nounOne: string = response.json()[Math.floor(Math.random() * response.json().length)].word;
      let nounTwo: string = response.json()[Math.floor(Math.random() * response.json().length)].word;
      while (nounOne === nounTwo) {
        nounTwo = response.json()[Math.floor(Math.random() * response.json().length)].word;
      }
      let newMetaphor = new Metaphor(`${this.primaryConcept} is more than ${nounOne} with ${nounTwo}`);
      newMetaphor.concepts.push(nounOne);
      newMetaphor.concepts.push(nounTwo);
      this.currentMetaphors.push(newMetaphor);
    });
  }

  preferMetaphor(metaphor: Metaphor) {
    this.currentMetaphors = [];
    this.currentMetaphors.push(metaphor);
    this.currentConcept = metaphor.concepts[Math.floor(Math.random() * metaphor.concepts.length)];
    this.makeMetaphor();
  }
}
