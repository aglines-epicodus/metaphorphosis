import { Metaphor } from './metaphor.model';

export class SessionInstance {
  counter = 0;
  constructor (public a: Metaphor, public b: Metaphor, public selectedMetaphor: Metaphor, public primaryConcept: string) {
  }

}
