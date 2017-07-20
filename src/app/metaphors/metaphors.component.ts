import { Component, OnInit } from '@angular/core';
import { DatamuseService } from '../services/datamuse.service';
import * as RiTa from 'rita';

@Component({
  selector: 'app-metaphors',
  templateUrl: './metaphors.component.html',
  styleUrls: ['./metaphors.component.css']
})
export class MetaphorsComponent implements OnInit {
  firstConcept: string = 'love';
  currentConcept: string;
  currentMetaphors: string[] = [];

  constructor(public datamuseService: DatamuseService) { }

  ngOnInit() {
    console.log('in OnInit');
        // this.datamuseService.getDatamuseResponse();
        this.currentConcept = this.firstConcept;
        this.makeMetaphors();
  }

  makeMetaphors() {
    this.datamuseService.getNouns(this.currentConcept).subscribe(response => {
      // this.currentMetaphors = [];
      while (this.currentMetaphors.length < 2) {
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
        console.log(`${this.firstConcept} is more than ${nounOne} with ${nounTwo}`);
        this.currentMetaphors.push(`${this.firstConcept} is more than ${nounOne} with ${nounTwo}`);
      }
    });
    console.log(this.currentMetaphors);
    // accept results from getDatamuseResponse
    // construct from random seeds and planned wordLinkage
  }

  assemblePairOfMetaphors(){
    //accept two metaphors, concat into one object
  }

}
