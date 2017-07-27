import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Concept } from '../models/concept.model';
import { ConceptService } from '../services/concept.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-add-concept',
  templateUrl: './add-concept.component.html',
  styleUrls: ['./add-concept.component.scss']
})
export class AddConceptComponent implements OnInit {

  currentlyEditing: any;

  constructor(private conceptService: ConceptService, private sessionService: SessionService) { }

  ngOnInit() {

  }

  startEditing(concept) {
    this.currentlyEditing = concept;
    console.log(this.currentlyEditing);
  }

  stopEditing(concept) {
    this.currentlyEditing = null;
    this.conceptService.updateConcept(concept);
  }

  checkForEditing(concept) {
    if (this.currentlyEditing) {
      if (this.currentlyEditing.$key === concept.$key) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  addConcept(form: NgForm) {
    var concept = new Concept(form.value.concept);
    this.conceptService.addConcept(concept);
  }

  removeConcept(key) {
    if (confirm('Are you sure you want to remove this concept?')) {
      this.conceptService.removeConcept(key);
    }
  }
}
