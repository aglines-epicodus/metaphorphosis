import { Injectable } from '@angular/core';
import { RiTa } from 'rita';

@Injectable()
export class MadLibService {
  stems: any[] = [
    {template:'CONCEPT1 is like CONCEPT2', concepts: 2},
    {template:'CONCEPT1 is more than CONCEPT2', concepts: 2},
    {template:'CONCEPT1 is less like CONCEPT2', concepts: 2},
    {template:'CONCEPT1 feels like CONCEPT2', concepts: 2},
    {template:'CONCEPT1 is CONCEPT2', concepts: 2},
    {template:'CONCEPT1 isn\'t just CONCEPT2', concepts: 2},
    {template:'CONCEPT1 is just CONCEPT2', concepts: 2}];

  affixes: any[] = [
    {template:' but with CONCEPT3', concepts: 1},
    {template:' but without CONCEPT3', concepts: 1},
    {template:' and CONCEPT3', concepts: 1},
    {template:' or CONCEPT3', concepts: 1},
  ];

  constructor() { }

  buildMadLib() {
    let firstPart = this.stems[Math.floor(Math.random() * this.stems.length)];
    //Percentage chance to get an affix is controlled here.
    if (Math.random() > 0.75) {
      let secondPart = this.affixes[Math.floor(Math.random() * this.affixes.length)];

      return {template: firstPart.template + secondPart.template + '.', concepts: firstPart.concepts + secondPart.concepts}
    } else {
      return {template: firstPart.template + '.', concepts: firstPart.concepts}
    }
  }

}
