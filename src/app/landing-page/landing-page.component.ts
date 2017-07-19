import { Component, OnInit } from '@angular/core';
import { DatamuseService} from '../services/datamuse.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(public service: DatamuseService) { }


  ngOnInit() {
    this.service.getDatamuseResponse();

  }

}
