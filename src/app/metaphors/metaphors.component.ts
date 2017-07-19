import { Component, OnInit } from '@angular/core';
import { DatamuseService }  from '../services/datamuse.service';

@Component({
  selector: 'app-metaphors',
  templateUrl: './metaphors.component.html',
  styleUrls: ['./metaphors.component.css']
})
export class MetaphorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
        this.service.getDatamuseResponse();
  }

}
