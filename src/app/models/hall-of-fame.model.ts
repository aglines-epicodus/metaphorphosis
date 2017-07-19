import { Metaphor } from './metaphor.model';
import { Session } from './session.model';

export class HallOfFame {
  constructor(public winningMetaphor: Metaphor, public session: Session) {}
}
