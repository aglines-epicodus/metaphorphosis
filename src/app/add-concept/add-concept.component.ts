import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Concept } from '../models/concept.model';
import { ConceptService } from '../services/concept.service';

@Component({
  selector: 'app-add-concept',
  templateUrl: './add-concept.component.html',
  styleUrls: ['./add-concept.component.scss']
})
export class AddConceptComponent implements OnInit {

  constructor(private conceptService: ConceptService) { }

  ngOnInit() {
    this.conceptService.activateConcept(); //for testing purposes only
  }

  addConcept(form: NgForm) {
    var concept = new Concept(form.value.concept);
    this.conceptService.addConcept(concept);
  }
}
