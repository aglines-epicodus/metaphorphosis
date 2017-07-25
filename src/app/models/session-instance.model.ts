import { Metaphor } from './metaphor.model';

export class SessionInstance {
  counter = 0;  //don't think this is needed
  constructor (public a: Metaphor, public b: Metaphor, public selectedMetaphor: Metaphor, public primaryConcept: string, public refId: number) {
  }
}
