import { Metaphor } from './metaphor.model';

export class SessionInstance {
  constructor (public a: Metaphor, public b: Metaphor, public selectedMetaphor: Metaphor, public primaryConcept: string) {

  }

}
