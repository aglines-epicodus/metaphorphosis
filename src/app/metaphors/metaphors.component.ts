import { Component, OnInit } from '@angular/core';
import { DatamuseService } from '../services/datamuse.service';

@Component({
  selector: 'app-metaphors',
  templateUrl: './metaphors.component.html',
  styleUrls: ['./metaphors.component.css']
})
export class MetaphorsComponent implements OnInit {

  constructor(public service: DatamuseService) { }

  ngOnInit() {
        this.service.getDatamuseResponse();
  }

  assembleSingleMetaphor() {
    // accept results from getDatamuseResponse
    // construct from random seeds and planned wordLinkage
  }

  assemblePairOfMetaphors(){
    //accept two metaphors, concat into one object
  }

}
