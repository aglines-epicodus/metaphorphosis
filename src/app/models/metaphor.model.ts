import { Concept } from './concept.model';

export class Metaphor {
  constructor (public originatingConcept: Concept, public conceptLinkage: string, public relatedConcept: Concept) {

  }
}
