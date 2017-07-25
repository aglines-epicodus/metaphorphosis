import { Metaphor } from './metaphor.model';

export class SessionInstance {
  counter = 0;
  constructor (public a: any, public b: any, public selectedMetaphor: any, public primaryConcept: any) {
  }

}
