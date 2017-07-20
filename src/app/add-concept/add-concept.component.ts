import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Concept } from '../models/concept.model';
import { ConceptService } from '../services/concept.service';

//for testing only
import { SessionService } from '../services/session.service';
// import { Session } from '../models/session.model';
// import { SessionInstance } from '../models/session-instance.model';
// import { Metaphor } from '../models/metaphor.model';

@Component({
  selector: 'app-add-concept',
  templateUrl: './add-concept.component.html',
  styleUrls: ['./add-concept.component.scss']
})
export class AddConceptComponent implements OnInit {

  constructor(private conceptService: ConceptService, private sessionService: SessionService) { }

  ngOnInit() {
    // var newConcept = new Concept('war');
    // var newConceptLinkage = 'is like';
    // var newConceptTwo = new Concept('politics');
    // var newMetaphor = new Metaphor(newConcept, newConceptLinkage, newConceptTwo);
    // var newSessionInstance = new SessionInstance(newMetaphor, newMetaphor, newMetaphor);
    // // this.conceptService.activateConcept(); //for testing purposes only
    //
    // this.sessionService.createNewSession(newSessionInstance);
    // this.sessionService.addSessionInstanceToSession(newSessionInstance);
    //
    // this.sessionService.commitSession();
  }

  addConcept(form: NgForm) {
    var concept = new Concept(form.value.concept);
    this.conceptService.addConcept(concept);
  }
}
